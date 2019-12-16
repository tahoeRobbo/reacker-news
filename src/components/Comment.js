import React from 'react'
import PropTypes from 'prop-types'

import { formatDateTimeFrom } from '../utils/helpers'

function Comment ({ by, id, time, text }) {
  return (
    <div>
      <div>{by} {formatDateTimeFrom(time)}</div>
      <p dangerouslySetInnerHTML={{__html: text }} />
    </div>
  )
}

Comment.propTypes = {
  by: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default Comment
