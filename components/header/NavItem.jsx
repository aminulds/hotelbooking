import Link from 'next/link'
import React from 'react'

const NavItem = ({ text, icon, isActive }) => {

  return (
    <li className={`nav-item ${isActive ? 'active' : ''}`}>
      <Link href='#'><a className='nav-link'>{icon} <span className='text'>{text}</span></a></Link>
    </li>
  )
}

export default NavItem