import React from 'react'

import { themeList } from '../utils/constants'

function ThemeMenu ({ changeTheme }) {
  const [openMenu, setOpenMenu] = React.useState(false)
  const handleThemeSelect = (theme) => {
    changeTheme(theme)
    setOpenMenu(false)
  }

  return (
    <div className='relative pl-16' >
      <button onClick={() => setOpenMenu((current) => !current)}>Themes</button>
      {openMenu &&
        <ul className='absolute right-0 bg-gray-600 w-full'>
          {themeList.map((theme) => (
            <li key={theme} onClick={() => handleThemeSelect(theme)}>{theme}</li>
          ))}
        </ul>}
    </div>
  )
}

export default ThemeMenu
