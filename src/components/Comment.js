import React from 'react'
import PropTypes from 'prop-types'

import { formatDateTimeFrom } from '../utils/helpers'

function Comment ({ by, time, text }) {
  return (
    <div>
      <div>{by} {formatDateTimeFrom(time)}</div>
      <p dangerouslySetInnerHTML={{__html: text }} />
    </div>
  )
}

Comment.propTypes = {
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default Comment
