import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { formatDateTimeFrom } from '../utils/helpers'

const PostInfo = ({ by, descendants = 0, kids = [], id, score = 0, time }) => {
  const linkToCommentsLogic = descendants ? <Link to={`/post?id=${kids.slice(0,1)}`}>{descendants}</Link> : 0

  return (
    <div>
      <span>{score} points </span>
      <span>by <Link to={`/user?id=${by}`}>{by}</Link></span>
      <span> {formatDateTimeFrom(time)} with <Link to={`/post?id=${id}`}>{descendants}</Link> comments</span>
    </div>
  )
}

PostInfo.propTypes = {
  by: PropTypes.string.isRequired,
  descendants: PropTypes.number,
  kids: PropTypes.array,
  id: PropTypes.number.isRequired,
  score: PropTypes.number,
  time: PropTypes.number.isRequired
}

export default PostInfo
