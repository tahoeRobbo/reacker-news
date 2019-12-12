import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ title, url }) => {
 return (
  <>
    <a href={url}>{title}</a>
  </>
 )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Title
