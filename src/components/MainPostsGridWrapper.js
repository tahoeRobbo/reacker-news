import React from 'react'
import PropTypes from 'prop-types'

import { fetchInitialPosts } from '../utils/api'

import PostsGrid from './PostsGrid'
import Loading from './Loading'

function mainPostsReducer (state, action) {
  if (action.type === 'fetching') {
    return {
      ...state,
      loading: true
    }
  } else if (action.type === 'success') {
      return {
        posts: action.posts,
        error: null,
        loading: false
      }
  } else if (action.type === 'failure') {
    return {
      ...state,
      error: action.error,
      loading: false
    }
  } else {
    throw new Error('That action is not supported')
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
    dispatch({ type: 'fetching'})

    fetchInitialPosts(type)
      .then((posts) => (
        dispatch({ type: 'success', posts})
      ))
      .catch((error) => (
        dispatch({ type: 'failure', error})
      ))
  }, [type])

  if (loading) {
    return <Loading text='Loading Posts' speed={100}/>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return <PostsGrid posts={posts} />
}

MainPostsGridWrapper.propTypes = {
  type: PropTypes.oneOf(['top', 'new'])
}

export default MainPostsGridWrapper
