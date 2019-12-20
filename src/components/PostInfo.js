import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { styles } from '../utils/constants'
import { formatDateTimeFrom } from '../utils/helpers'

import ThemeContext from '../contexts/Theme'

const PostInfo = ({ by, descendants = 0, id, score = 0, time }) => {
  const theme = React.useContext(ThemeContext)
  const linkStyles = `${styles[theme].primary} underline`
  return (
    <div className={`${styles[theme].secondary} text-sm`}>
      <span>{score} points </span>
      <span>by <Link className={linkStyles} to={`/user?id=${by}`}>{by}</Link></span>
      <span> {formatDateTimeFrom(time)} with <Link className={linkStyles} to={`/post?id=${id}`}>{descendants}</Link> comments</span>
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
