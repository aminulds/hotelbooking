import React from 'react';
import Navbar from './Navbar';
import SearchFilter from './SearchFilter';
import TopNav from './TopNav';


const Header = ({ isHeaderSearch }) => {

	return (
		<header className='header'>
			<div className="container">
				<TopNav />
				<Navbar />
				{isHeaderSearch === 'true' &&
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