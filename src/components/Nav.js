import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const styles = {
  navLink: ['font-bold', 'text-xl', 'text-dark-brown'],
  activeStyle: '#8c3019'
}

export default function Nav ({ changeTheme }) {
  const [openMenu, setOpenMenu] = React.useState(false)

  const handleThemeSelect = (theme) => {
    changeTheme(theme)
    setOpenMenu(false)
  }

  return (
    <nav className='flex flex-row justify-between mb-2'>
      <ul className='flex flex-row'>
        <li className='mr-4'>
          <NavLink
            to='/'
            exact
            className={styles.navLink.join(' ')}
            activeStyle={{color: styles.activeStyle}}
          >
            Top
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/new'
            exact
            className={styles.navLink.join(' ')}
            activeStyle={{color: styles.activeStyle}}
          >
            New
          </NavLink>
        </li>
      </ul>
      <div className='relative'>
        <button onClick={() => setOpenMenu((current) => !current)}>Themes {openMenu.toString()}</button>
        {openMenu &&
          <ul className='absolute bg-gray-600 w-full'>
            <li onClick={() => handleThemeSelect('bamboo')}>bamboo</li>
            <li onClick={() => handleThemeSelect('neon')}>neon</li>
          </ul>}
      </div>
    </nav>
  )
}

Nav.propTypes = {
  changeTheme: PropTypes.func.isRequired
}
