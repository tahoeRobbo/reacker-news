import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '../utils/constants'
import ThemeContext from '../contexts/Theme'

const loadingStyles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center'
  }
}

export default function Loading ({ text = 'Loading', speed = 300}) {
  const [content, setContent] = React.useState(text)
  const theme = React.useContext(ThemeContext)

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setContent((content) => {
        return content === `${text}...`
          ? text
          : `${content}.`
      })
    }, speed)

    return () => window.clearInterval(id)
  }, [text, speed])

  return (
    <p className={`${styles[theme].primary}`} style={loadingStyles.content}>
      {content}
    </p>
  )
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number
}
