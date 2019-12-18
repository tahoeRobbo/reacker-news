import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
  navLink: ['font-bold', 'text-xl'],
  activeStyle: {
    color: '#069420'
  }
}

export default function Nav () {
  return (
    <nav className='flex flex-row justify-between mb-2'>
      <ul className='flex flex-row'>
        <li className='mr-4'>
          <NavLink
            to='/'
            exact
            className={styles.navLink.join(' ')}
            activeStyle={styles.activeStyle}
          >
            Top
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/new'
            exact
            className={styles.navLink.join(' ')}
            activeStyle={styles.activeStyle}
          >
            New
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
