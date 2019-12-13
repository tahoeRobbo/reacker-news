import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'

import { fetchUser } from '../utils/api'
import { formatDateTimeMMDDYY } from '../utils/helpers'

import Loading from './Loading'

function getInitialState () {
  return {
    loadingComments: true,
    comments: null,
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
  } else if (type === 'fetching_comments') {
    return {
      ...state,
      loadingComments: true
    }
  } else if (type === 'success_user') {
    return {
      ...state,
      user: action.user,
      loadingUser: false
    }
  } else if (type === 'success_comments') {
    return {
      ...state,
      comments: action.comments,
      loadingComments: false
    }
  } else if (type === 'failure') {
    return {
      ...state,
      error: action.error,
      loadingUser: false,
      loadingComments: false
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
  const { comments, loadingComments, loadingUser, user, error } = state

  console.log(user)

  React.useEffect(() => {
    dispatch({ type: 'fetching_user' })
    dispatch({ type: 'fetching_comments' })

    fetchUser(id)
      .then((user) => {
        dispatch({ type: 'success_user', user })
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
              </div>
            </div>
          </>
      }
      {loadingComments
        ? <Loading text='Loading Comments' />
        : (
          <div className='comments-container'>
            comments go here
          </div>
        )
      }
>
    </>
  )
}

User.propTypes = {
  location: PropTypes.object.isRequired
}

export default User
