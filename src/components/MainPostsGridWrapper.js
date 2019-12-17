import React from 'react'
import PropTypes from 'prop-types'

import { fetchInitialPosts } from '../utils/api'
import {
  ACTION_TYPE_ERROR,
  FAILURE,
  FETCHING_POSTS,
  SUCCESS_POSTS
} from '../utils/constants'

import PostsGrid from './PostsGrid'
import Loading from './Loading'
import Error from './Error'

function mainPostsReducer (state, action) {
  if (action.type === FETCHING_POSTS) {
    return {
      ...state,
      loading: true
    }
  } else if (action.type === SUCCESS_POSTS) {
      return {
        posts: action.posts,
        error: null,
        loading: false
      }
  } else if (action.type === FAILURE) {
    return {
      ...state,
      error: action.error,
      loading: false
    }
  } else {
    throw new Error(ACTION_TYPE_ERROR)
  }
}

const initialState = {
  loading: true,
  posts: null,
  error: null
}

function MainPostsGridWrapper ({ type }) {
  const [state, dispatch] = React.useReducer(
    mainPostsReducer,
    initialState
  )

  const { loading, posts, error } = state

  React.useEffect(() => {
    dispatch({ type: FETCHING_POSTS})

    fetchInitialPosts(type)
      .then((posts) => (
        dispatch({ type: SUCCESS_POSTS, posts})
      ))
      .catch((error) => (
        dispatch({ type: FAILURE, error})
      ))
  }, [type])

  if (loading) {
    return <Loading text='Loading Posts' speed={100}/>
  }

  if (error) {
    return <Error message={error.message} />
  }

  return <PostsGrid posts={posts} />
}

MainPostsGridWrapper.propTypes = {
  type: PropTypes.oneOf(['top', 'new'])
}

export default MainPostsGridWrapper
