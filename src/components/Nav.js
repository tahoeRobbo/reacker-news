import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  color: 'baby-blue'
}

export default function Nav () {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to='/'
            exact
            activeStyle={activeStyle}
          >
            Top
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/new'
            exact
            activeStyle={activeStyle}
          >
            New
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
