import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import ThemeMenu from './ThemeMenu'

const styles = {
  navLink: ['font-bold', 'text-xl', 'text-dark-brown'],
  activeStyle: '#8c3019'
}

export default function Nav ({ changeTheme }) {
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
      <ThemeMenu changeTheme={changeTheme} />
    </nav>
  )
}

Nav.propTypes = {
  changeTheme: PropTypes.func.isRequired
}
