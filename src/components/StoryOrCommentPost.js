import React from 'react'
import queryString from 'query-string'

import { fetchPosts, fetchComments } from '../utils/api'
import {
  ACTION_TYPE_ERROR,
  FAILURE,
  FETCHING_COMMENTS,
  FETCHING_POST,
  SUCCESS_COMMENTS,
  SUCCESS_POST
} from '../utils/constants'

import Comment from './Comment'
import Post from './Post'
import Loading from './Loading'
import Error from './Error'

function getSOCInitialState () {
  return {
    loadingPost: true,
    loadingComments: false,
    post: null,
    comments: [],
    error: null
  }
}

function sOCPostReducer (state, action) {
  const type = action.type
  if (type === FETCHING_POST) {
    return {
      ...state,
      loadingPost: true
    }
  } else if (type === SUCCESS_POST) {
    return {
      ...state,
      post: action.post,
      loadingPost: false,
      error: null
    }
  } else if (type === FETCHING_COMMENTS) {
    return {
      ...state,
      loadingComments: true
    }
  } else if (type === SUCCESS_COMMENTS) {
    return {
      ...state,
      comments: state.comments.concat(action.comments),
      loadingComments: false,
      error: null
    }
  } else if (type === FAILURE) {
    return {
      ...state,
      error: action.error,
      loadingComments: false,
      loadingPost: false
    }
  } else {
    throw new Error(ACTION_TYPE_ERROR)
  }
}

function StoryOrCommentPost ({ location }) {
  const { id } = queryString.parse(location.search)

  const [state, dispatch] = React.useReducer(
    sOCPostReducer,
    getSOCInitialState()
  )
  const { comments, loadingComments, post, loadingPost, error } = state

  React.useEffect(() => {
    dispatch({ type: FETCHING_POST })
    dispatch({ type: FETCHING_COMMENTS })

    fetchPosts([id])
      .then(([post]) => {
        dispatch({ type: SUCCESS_POST, post })
        if (!post.kids) {
          return dispatch({ type: SUCCESS_COMMENTS, comments: [] })
        }
        fetchComments(post.kids)
          .then((comments) => {
            dispatch({ type: SUCCESS_COMMENTS, comments })
          })
      })
      .catch((error) => {
        dispatch({ type: FAILURE, error })
      })
  }, [id])

  if (error) {
    return <Error message={error.message} />
  }

  return (
    <div>
      {loadingPost
        ? <Loading text='Loading Post' />
        : <>
            <Post post={post} />
            <p className='text-dark-brown' dangerouslySetInnerHTML={{ __html: post.text }} />
          </>}
      {!loadingPost && loadingComments
        ? <Loading text='Loading Comments' />
        : comments.length > 0
          ? comments.map((comment) => (
            <Comment text={comment.text} time={comment.time} by={comment.by} id={comment.id} key={comment.id} />
          ))
          : <p className='text-dark-brown mt-2 font-bold '>There are no comments for this story. </p>}
    </div>
  )
}

export default StoryOrCommentPost
