import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'

import { fetchUser, fetchPosts } from '../utils/api'
import { formatDateTimeMMDDYY } from '../utils/helpers'
import {
  ACTION_TYPE_ERROR,
  FAILURE,
  FETCHING_POSTS,
  FETCHING_USER,
  SUCCESS_POSTS,
  SUCCESS_USER
} from '../utils/constants'

import Loading from './Loading'
import PostsGrid from './PostsGrid'
import Error from './Error'

function getInitialState () {
  return {
    loadingPosts: false,
    posts: [],
    loadingUser: true,
    user: null,
    error: null
  }
}

function userReducer (state, action) {
  const { type } = action
  if (type === FETCHING_USER) {
    return {
      ...state,
      loadingUser: true
    }
  } else if (type === FETCHING_POSTS) {
    return {
      ...state,
      loadingPosts: true
    }
  } else if (type === SUCCESS_USER) {
    return {
      ...state,
      user: action.user,
      loadingUser: false
    }
  } else if (type === SUCCESS_POSTS) {
    return {
      ...state,
      posts: state.posts.concat(action.posts),
      loadingPosts: false
    }
  } else if (type === FAILURE) {
    return {
      ...state,
      error: action.error,
      loadingUser: false,
      loadingPosts: false
    }
  } else {
    throw new Error(ACTION_TYPE_ERROR)
  }
}

function User ({ location }) {
  const { id } = queryString.parse(location.search)
  const [state, dispatch] = React.useReducer(
    userReducer,
    getInitialState()
  )
  const { posts, loadingPosts, loadingUser, user, error } = state

  console.log(user)

  React.useEffect(() => {
    dispatch({ type: FETCHING_USER })

    fetchUser(id)
      .then((user) => {
        dispatch({ type: SUCCESS_USER, user })
        dispatch({ type: FETCHING_POSTS })
        fetchPosts(user.submitted.slice(0, 100))
          .then((posts) => {
            dispatch({ type: SUCCESS_POSTS, posts })
        })
      })
      .catch((error) => {
        dispatch({ type: FAILURE, error})
      })
  }, [id])

  if (error) {
    return <Error message={error.message} />
  }
  return (
    <>
      {loadingUser
        ? <Loading text='Loading User' />
        : <>
            <div className='user-container'>
              <div>{user.id}</div>
              <div>
                <span>Joined: {formatDateTimeMMDDYY(user.created)}, </span>
                <span>has {user.karma} karma</span>
              </div>
              <p dangerouslySetInnerHTML={{__html: user.about}} />
            </div>
          </>}
      {loadingPosts
        ? <Loading text='Loading Posts' />
        : posts.length === 0
          ? <p>This user has not made any recent posts.</p>
          : <>
              <h2>Most Recent Posts</h2>
              <PostsGrid posts={posts} />
            </>}
    </>
  )
}

User.propTypes = {
  location: PropTypes.object.isRequired
}

export default User
