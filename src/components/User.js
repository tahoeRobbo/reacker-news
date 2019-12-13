import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'

import { fetchUser, fetchPosts, onlyPosts } from '../utils/api'
import { formatDateTimeMMDDYY } from '../utils/helpers'

import Loading from './Loading'
import PostsGrid from './PostsGrid'

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
  if (type === 'fetching_user') {
    return {
      ...state,
      loadingUser: true
    }
  } else if (type === 'fetching_posts') {
    return {
      ...state,
      loadingPosts: true
    }
  } else if (type === 'success_user') {
    return {
      ...state,
      user: action.user,
      loadingUser: false
    }
  } else if (type === 'success_posts') {
    return {
      ...state,
      posts: state.posts.concat(action.posts),
      loadingPosts: false
    }
  } else if (type === 'failure') {
    return {
      ...state,
      error: action.error,
      loadingUser: false,
      loadingPosts: false
    }
  } else {
    throw new Error('That action type is not supported')
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
    dispatch({ type: 'fetching_user' })

    fetchUser(id)
      .then((user) => {
        dispatch({ type: 'success_user', user })
        dispatch({ type: 'fetching_posts' })
        fetchPosts(user.submitted.slice(0, 100))
          .then((posts) => {
            dispatch({ type: 'success_posts', posts })
        })
      })
      .catch((error) => {
        dispatch({ type: 'failure', error})
      })
  }, [id])

  if (error) {
    return <p>{error.message}</p>
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
                <p dangerouslySetInnerHTML={{__html: user.about}} />
              </div>
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
