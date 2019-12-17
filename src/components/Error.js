import React from 'react'
import PropTypes from 'prop-types'

function Error ({ message }) {
  return (
    <div>
      {message}
    </div>
  )
}

Error.propTypes = {
  message: PropTypes.string.isRequired
}

export default Error
