import React from 'react'
import PropTypes from 'prop-types'

import Title from './Title'

const Post = ({ post }) => {
  console.log('props', post)
 return (
  <>
    <Title url={post.url} title={post.title} />
  </>
 )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post
