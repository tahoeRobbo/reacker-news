import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { formatDateTimeFrom } from '../utils/helpers'

<<<<<<< Updated upstream
const PostInfo = ({ by, kids = [], score = 0, time }) => {
=======
const PostInfo = ({ author, kids = [], score = 0, time, decendents = 0}) => {
>>>>>>> Stashed changes
 return (
  <div>
    <span>{score} points </span>
    <span>by <Link to={`/user?id=${by}`}>{by}</Link></span>
    <span> {formatDateTimeFrom(time)} ({kids.length} comments)</span>
  </div>
 )
}

PostInfo.propTypes = {
<<<<<<< Updated upstream
  by: PropTypes.string.isRequired,
=======
  author: PropTypes.string.isRequired,
  decendents: PropTypes.number,
>>>>>>> Stashed changes
  kids: PropTypes.array,
  score: PropTypes.number,
  time: PropTypes.number.isRequired
}

export default PostInfo
