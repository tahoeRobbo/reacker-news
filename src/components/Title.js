import React from 'react'
import PropTypes from 'prop-types'

import { styles } from '../utils/constants'

import { Link } from 'react-router-dom'
import ThemeContext from '../contexts/Theme'

const Title = ({ title, url, id }) => {
  const theme  = React.useContext(ThemeContext)
  return (
    <span className={`${styles[theme].primary} font-bold`}>
      {url
        ? <a href={url}>{title}</a>
        : <Link to={`/post?id=${id}`}>{title}</Link>
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
