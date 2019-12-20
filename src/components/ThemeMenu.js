import React from 'react'

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
      <ul className={`${styles[theme].commentBg} absolute right-0 w-full p-1 rounded-lg`}>
        {themeList.map((theme) => (
          <li className={`${styles[theme].secondary}`} key={theme} onClick={() => handleThemeSelect(theme)}>{theme}</li>
        ))}
      </ul>}
    </div>
  )
}

export default ThemeMenu
