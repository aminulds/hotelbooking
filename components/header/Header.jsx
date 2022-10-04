import React from 'react';
import Navbar from './Navbar';
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