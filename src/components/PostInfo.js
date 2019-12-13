import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { formatDateTimeFrom } from '../utils/helpers'

const PostInfo = ({ by, kids = [], score = 0, time }) => {
 return (
  <div>
    <span>{score} points </span>
    <span>by <Link to={`/user?id=${by}`}>{by}</Link></span>
    <span> {formatDateTimeFrom(time)} ({kids.length} comments)</span>
  </div>
 )
}

PostInfo.propTypes = {
  by: PropTypes.string.isRequired,
  kids: PropTypes.array,
  score: PropTypes.number,
  time: PropTypes.number.isRequired
}

export default PostInfo
