import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { formatDateTimeFrom } from '../utils/helpers'
import { styles } from '../utils/constants'

import ThemeContext from '../contexts/Theme'

function Comment ({ by, time, text }) {
  const theme = React.useContext(ThemeContext)
  return (
    <div className={`${styles[theme].commentBg} ${styles[theme].secondary} p-4 mt-1 rounded-lg`}>
      <div><Link className='underline text-sm' to={`/user?id=${by}`}>{by}</Link> {formatDateTimeFrom(time)}</div>
      <p className={`${styles[theme].primary}`} dangerouslySetInnerHTML={{__html: text }} />
    </div>
  )
}

Comment.propTypes = {
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default Comment
