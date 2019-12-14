import React from 'react'
import queryString from 'query-string'

import { fetchPosts, fetchComments } from '../utils/api'

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
  if (type === 'fetching_post') {
    return {
      ...state,
      loadingPost: true
    }
  } else if (type === 'success_post') {
    return {
      ...state,
      post: action.post,
      loadingPost: false,
      error: null
    }
  } else if (type === 'fetching_comments') {
    return {
      ...state,
      loadingComments: true
    }
  } else if (type === 'success_comments') {
    return {
      ...state,
      comments: state.comments.concat(action.comments),
      loadingComments: false,
      error: null
    }
  } else if (type === 'failure') {
    return {
      ...state,
      error: action.error,
      loadingComments: false,
      loadingPost: false
    }
  } else {
    throw new Error ('that action is not supported')
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
    dispatch({ type: 'fetching_post' })
    dispatch({ type: 'fetching_comments' })

    fetchPosts([id])
      .then(([post]) => {
        dispatch({ type: 'success_post', post })
        fetchComments(post.kids)
          .then((comments) => {
            dispatch({ type: 'success_comments', comments })
        })
    })
      .catch((error) => {
        dispatch({ type: 'failure', error })
    })
  }, [id])

  console.log('post', post)
  console.log('comments', comments)
  return (
    <div>
      {id}
    </div>
  )
}

export default StoryOrCommentPost
