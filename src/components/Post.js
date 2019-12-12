import React from 'react'
import PropTypes from 'prop-types'

import Title from './Title'
import PostInfo from './PostInfo'


const Post = ({ post }) => {
  console.log('props', post)

 return (
  <>
    <Title url={post.url} title={post.title} />
    <PostInfo author={post.by} kids={post.kids} time={post.time} score={post.score} />
  </>
 )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post
