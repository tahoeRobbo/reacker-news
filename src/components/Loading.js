import React from 'react'
import PropTypes from 'prop-types'

const styles = {
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
  const [ content, setContent ] = React.useState(text)

  React.useEffect(() => {
    let id = window.setInterval(() => {
      setContent((content) => {
        return content === `${text}...`
          ? text
          : `${content}.`
      })
    }, speed)

    return () => window.clearInterval(id)
  }, [text, speed])

  return (
    <p className='text-dark-brown' style={styles.content}>
      {content}
    </p>
  )
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number
}
