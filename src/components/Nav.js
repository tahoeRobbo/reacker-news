import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { styles } from '../utils/constants'

import ThemeMenu from './ThemeMenu'
import ThemeContext from '../contexts/Theme'


export default function Nav ({ changeTheme }) {
  const theme = React.useContext(ThemeContext)
  const navStyles = {
    navLink: `${styles[theme].primary} font-bold text-xl`,
    activeStyle: `${styles[theme].selected}`
  }
  console.log('navStyles.activeStyle', navStyles.activeStyle)

  return (
    <nav className='flex flex-row justify-between mb-2'>
      <ul className='flex flex-row'>
        <li className='mr-4'>
          <NavLink
            to='/'
            exact
            className={navStyles.navLink}
            activeStyle={{ color: navStyles.activeStyle }}
          >
            Top
          < /NavLink>
        </li>
        <li>
          <NavLink
            to='/new'
            exact
            className={navStyles.navLink}
            activeStyle={{ color: navStyles.activeStyle }}
          >
            New
          </NavLink>
        </li>
      </ul>
      <ThemeMenu changeTheme={changeTheme} />
    </nav>
  )
}

Nav.propTypes = {
  changeTheme: PropTypes.func.isRequired
}
