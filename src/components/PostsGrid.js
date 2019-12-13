import React from 'react'
import PropTypes from 'prop-types'

import Post from './Post'

export default function PostsGrid ({ posts }) {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </>
  )
}

PostsGrid.propTypes = {
  posts: PropTypes.array.isRequired
}
