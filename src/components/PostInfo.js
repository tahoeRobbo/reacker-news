import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { formatDateTimeFrom } from '../utils/helpers'

const styles = {
  link: ['underline', 'font-black']
}

const PostInfo = ({ by, descendants = 0, id, score = 0, time }) => {
  return (
    <div className='text-sm text-gray-800'>
      <span>{score} points </span>
      <span>by <Link className={styles.link.join(' ')} to={`/user?id=${by}`}>{by}</Link></span>
      <span> {formatDateTimeFrom(time)} with <Link className={styles.link.join(' ')} to={`/post?id=${id}`}>{descendants}</Link> comments</span>
    </div>
  )
}

PostInfo.propTypes = {
  by: PropTypes.string.isRequired,
  descendants: PropTypes.number,
  id: PropTypes.number.isRequired,
  score: PropTypes.number,
  time: PropTypes.number.isRequired
}

export default PostInfo
