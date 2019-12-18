import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

const Title = ({ title, url, id }) => {
  return (
    <span className='font-bold'>
      {url
        ? <a href={url}>{title}</a>
        : <Link to={`/post?id=${id}`} >{title}</Link>
      }
    </span>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  id: PropTypes.number.isRequired
}

export default Title
