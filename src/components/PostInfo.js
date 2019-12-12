import React from 'react'
import PropTypes from 'prop-types'

import { formatDateTime } from '../utils/helpers'

const PostInfo = ({ author, kids = [], score = 0, time }) => {
 return (
  <div>
    {score} points by {author} {formatDateTime(time)} ({kids.length} comments)
  </div>
 )
}

PostInfo.propTypes = {
  author: PropTypes.string.isRequired,
  kids: PropTypes.array,
  score: PropTypes.number,
  time: PropTypes.number.isRequired
}

export default PostInfo
