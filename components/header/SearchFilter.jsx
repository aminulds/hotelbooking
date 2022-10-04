import React from 'react';
import {FaBed, FaCalendarAlt} from 'react-icons/fa';
import {GiPerson} from 'react-icons/gi';

const SearchFilter = () => {
  return (
    <div className='seachFiler'>
        <div className="searchItem">
            <FaBed className='icon'/>
            <input type="search" placeholder='Where are you going' className='form-control searchInput'/>
        </div>
        <div className="searchItem">
            <FaCalendarAlt className='icon'/>
            <span className='text'>Date to Date</span>
        </div>
        <div className="searchItem">
            <GiPerson className='icon'/>
            <span className='text'>2 Adult 2 Children 1 Room</span>
        </div>
        <div className="searchItem">
            <button className='btn btnFilter'>Search</button>
        </div>
    </div>
  )
}

export default SearchFilter