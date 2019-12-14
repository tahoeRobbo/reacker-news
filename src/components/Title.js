import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

const Title = ({ title, url, id }) => {
 return (
  <>
    { url
      ? <a href={url}>{title}</a>
      : <Link to={`/post?id=${id}`} >XXXXXXXXXXX{title}</Link>
    }

  </>
 )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  id: PropTypes.number.isRequired
}

export default Title
