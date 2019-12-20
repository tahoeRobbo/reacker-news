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
  SUCCESS_USER,
  styles
} from '../utils/constants'

import ThemeContext from '../contexts/Theme'

import Loading from './Loading'
import PostsGrid from './PostsGrid'
import Error from './Error'

function getUserInitialState () {
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
  const theme = React.useContext(ThemeContext)
  const [state, dispatch] = React.useReducer(
    userReducer,
    getUserInitialState()
  )
  const { posts, loadingPosts, loadingUser, user, error } = state

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
        : <div className='mb-2'>
            <div className={`${styles[theme].primary} font-bold text-5xl`}>{user.id}</div>
            <div className={`${styles[theme].secondary}`}>
              <span>Joined <b>{formatDateTimeMMDDYY(user.created)}</b> </span>
              <span>has <b>{user.karma}</b> karma</span>
            </div>
            <p dangerouslySetInnerHTML={{__html: user.about}} />
          </div>}
      {loadingPosts
        ? <Loading text='Loading Posts' />
        : posts.length === 0
          ? <p>This user has not made any recent posts.</p>
          : <>
              <h2 className={`${styles[theme].primary} text-2xl font-bold mb-2`}>Most Recent Posts</h2>
              <PostsGrid posts={posts} />
            </>}
    </>
  )
}

User.propTypes = {
  location: PropTypes.object.isRequired
}

export default User
