import React from 'react'
import { fetchInitialPosts } from '../utils/api'

import Loading from './Loading'

const initialState = {
  posts: null,
  loading: false,
  error: null
}

function postsGridReducer (state, action) {
  switch (action.type) {
    case 'fetch':
      return {
        ...state,
        loading: true
      }
    case 'success':
      return {
        posts: action.posts,
        loading: false,
        error: null
      }
    case 'failure':
      return {
        ...state,
        loading: false,
        error: action.error
      }
  }
}

export default function PostsGrid () {
const [ state, dispatch ] = React.useReducer(
    postsGridReducer,
    initialState
)

  React.useEffect(() => {
    dispatch({ type: 'fetch' })

      fetchInitialPosts()
        .then((posts) => {
          dispatch({ type: 'success', posts})
        })
        .catch((error) => dispatch({ type: 'failure', error }))
  }, [])

  if (state.loading) {
    return <Loading text='Loading Posts' speed={100}/>
  }

  return (
    <>
      <ul>
        {state.posts && state.posts.map((post) => (
          <li key={post.id}>
            {JSON.stringify(post)}
          </li>
        ))}
      </ul>
    </>
  )
}
