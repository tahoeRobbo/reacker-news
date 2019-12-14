import React from 'react'
import PropTypes from 'prop-types'

import Title from './Title'
import PostInfo from './PostInfo'


const Post = ({ post }) => {
  // console.log('post.id', post.kids[0])
  return (
    <>
      <Title
        url={post.url}
        title={post.title}
        id={post.id}
      />
      <PostInfo
        by={post.by}
        descendents={post.descendents}
        kids={post.kids}
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
