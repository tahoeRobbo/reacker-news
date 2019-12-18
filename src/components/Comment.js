import React from 'react'
import PropTypes from 'prop-types'

import { formatDateTimeFrom } from '../utils/helpers'
import { Link } from 'react-router-dom'

function Comment ({ by, time, text }) {
  return (
    <div className='bg-peach-200 p-4 mt-1 rounded-lg text-light-brown'>
      <div><Link className='underline text-sm' to={`/user?id=${by}`}>{by}</Link> {formatDateTimeFrom(time)}</div>
      <p className='text-dark-brown' dangerouslySetInnerHTML={{__html: text }} />
    </div>
  )
}

Comment.propTypes = {
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default Comment
