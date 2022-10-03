import React from 'react';
import { headerData } from './headerData';
import ListItem from './listItem';


const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="headerLists">
          {
           headerData.map((item) => (
            <ListItem key={item.text} text={item.text} icon={item.icon} isActive={item.isActive} />
           ))
          }
        </div>
      </div>
    </header>
  )
}

export default Header