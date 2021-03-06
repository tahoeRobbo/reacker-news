import React from 'react'
import PropTypes from 'prop-types'

import { styles, themeList } from '../utils/constants'

import ThemeContext from '../contexts/Theme'

function ThemeMenu ({ changeTheme }) {
  const theme = React.useContext(ThemeContext)
  const [openMenu, setOpenMenu] = React.useState(false)
  const handleThemeSelect = (theme) => {
    changeTheme(theme)
    setOpenMenu(false)
  }

  return (
    <div className={`${styles[theme].primary} relative pl-16`}>
      <button onClick={() => setOpenMenu((current) => !current)}>Themes</button>
      {openMenu &&
        <ul className={`${styles[theme].commentBg} absolute right-0 p-2 rounded-lg`}>
          {themeList.map((theme) => (
            <li className={`${styles[theme].secondary} text-right`} key={theme} onClick={() => handleThemeSelect(theme)}>{theme}</li>
          ))}
        </ul>}
    </div>
  )
}

ThemeMenu.propTypes = {
  changeTheme: PropTypes.func.isRequired
}

export default ThemeMenu
