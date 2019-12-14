import React from 'react'
import PropTypes from 'prop-types'

import Title from './Title'
import PostInfo from './PostInfo'


const Post = ({ post }) => {
  console.log('post.id', post.kids[0])
 return (
  <>
<<<<<<< Updated upstream
    <Title url={post.url} title={post.title} />
    <PostInfo by={post.by} kids={post.kids} time={post.time} score={post.score} />
=======
    <Title url={post.url} title={post.title} id={post.id} />
    <PostInfo
      author={post.by}
      decendents={post.decendents}
      kids={post.kids}
      time={post.time}
      score={post.score}
    />
>>>>>>> Stashed changes
  </>
 )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post
