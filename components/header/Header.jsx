import React from 'react';
import Navbar from './Navbar';
import SearchFilter from './SearchFilter';
import TopNav from './TopNav';

import { useStateContext } from '../../context/ContextProvider';


const Header = () => {
	const { filterSearch, setFilterSearch, } = useStateContext();

	return (
		<header className='header'>
			<div className="container">
				<TopNav />
				<Navbar />
				{filterSearch &&
					<>
						<div className="header-description">
							<h2 className='title'>Find Your Next Stay</h2>
							<p>Search deals on hotels, homes, and much more...</p>
						</div>
						<SearchFilter />
					</>
				}
			</div>
		</header>
	)
}

export default Header