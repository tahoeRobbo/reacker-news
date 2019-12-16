import React from 'react'
import PropTypes from 'prop-types'

import Title from './Title'
import PostInfo from './PostInfo'


const Post = ({ post }) => {
// console.log('post', post)
  return (
    <>
      <Title
        url={post.url}
        title={post.title}
        id={post.id}
      />
      <PostInfo
        by={post.by}
        descendants={post.descendants}
        kids={post.kids}
        id={post.id}
        time={post.time}
        score={post.score}
      />
  </>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post
