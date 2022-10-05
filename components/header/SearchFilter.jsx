import { React } from 'react';
import { FaBed, FaCalendarAlt } from 'react-icons/fa';
import { GiPerson } from 'react-icons/gi';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useStateContext } from '../../context/ContextProvider';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';


const SearchFilter = () => {
	const { openDateRange, setopenDateRange, date, setDate } = useStateContext();

	const handleOpenDateRange = () => setopenDateRange(!openDateRange);

	return (
		<div className='seachFiler'>
			<div className="searchItem">
				<FaBed className='icon' />
				<input type="search" placeholder='Where are you going?' className='form-control searchInput' />
			</div>
			<div className="searchItem">
				<FaCalendarAlt className='icon' />
				<span onClick={handleOpenDateRange} className='text'>{`${format(date[0].startDate, 'dd-MM-yyyy')} to ${format(date[0].endDate, 'dd-MM-yyyy')}`}</span>
				{openDateRange && <DateRange
					editableDateInputs={true}
					onChange={item => setDate([item.selection])}
					moveRangeOnFirstSelection={false}
					ranges={date}
					className="dateFilter card border-0 shadow"
				/>}
			</div>
			<div className="searchItem">
				<GiPerson className='icon' />
				<span className='text'>2 Adult 2 Children 1 Room</span>
			</div>
			<div className="searchItem">
				<button className='btn btnFilter'>Search</button>
			</div>
		</div>
	)
}

export default SearchFilter