import React from 'react';
import { headerData } from './headerData';
import NavItem from './NavItem';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {
            headerData.map((item) => (
              <NavItem key={item.text} text={item.text} icon={item.icon} isActive={item.isActive} />
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar