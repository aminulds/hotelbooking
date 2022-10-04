import React from 'react';
import { headerData } from './headerData';
import Navbar from './Navbar';
import NavItem from './NavItem';
import TopNav from './TopNav';


const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <TopNav />
        <Navbar/>
      </div>
    </header>
  )
}

export default Header