import React from 'react'
import PropTypes from 'prop-types'

function Error ({ message }) {
  return (
    <div className='text-2xl text-red-900'>
      {message}
    </div>
  )
}

Error.propTypes = {
  message: PropTypes.string.isRequired
}

export default Error
