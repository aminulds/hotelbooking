import { React } from 'react';
import { FaBed, FaCalendarAlt } from 'react-icons/fa';
import { GiPerson } from 'react-icons/gi';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

import { useStateContext } from '../../context/ContextProvider';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Button from '../UI/Button';
import Link from 'next/link';


const SearchFilter = () => {
	const { openDateRange, setopenDateRange, date, setDate, openOption, setOpenOption, option, setOption } = useStateContext();

	const handleOpenDateRange = () => setopenDateRange(!openDateRange);
	const handleOpenOption = () => setOpenOption(!openOption);

	const handleOption = ((name, action) => {
		setOption((prev) => {
			return {
				...prev, [name]: action === 'i' ? option[name] + 1 : option[name] - 1,
			}
		})
	});


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
				<span onClick={handleOpenOption} className='text'>{`${option.adult} adult . ${option.children} children ${option.room}`}</span>
				{openOption && <div className="options card border-0 shadow p-3 p-md-4">
					<div className="optionItem">
						<span>Adults</span>
						<div className='ps-3 ps-md-5 optionGroup'>
							<button disabled={option.adult <= 1} onClick={() => handleOption('adult', 'd')} type='button' className={`btn btnMinus ${option.adult <= 1 ? 'btnDisable' : ''}`}>-</button>
							<span className='px-3'>{option.adult}</span>
							<button disabled={option.adult >= 5} onClick={() => handleOption('adult', 'i')} type='button' className={`btn btnPlus ${option.adult >= 5 ? 'btnDisable' : ''}`}>+</button>
						</div>
					</div>
					<div className="optionItem">
						<span>Children</span>
						<div className='ps-3 ps-md-5 optionGroup'>
							<button disabled={option.children <= 0} onClick={() => handleOption('children', 'd')} type='button' className={`btn btnMinus ${option.children <= 0 ? 'btnDisable' : ''}`}>-</button>
							<span className='px-3'>{option.children}</span>
							<button disabled={option.children >= 5} onClick={() => handleOption('children', 'i')} type='button' className={`btn btnPlus ${option.children >= 5 ? 'btnDisable' : ''}`}>+</button>
						</div>
					</div>
					<div className="optionItem">
						<span>Room</span>
						<div className='ps-3 ps-md-5 optionGroup'>
							<button disabled={option.room <= 1} onClick={() => handleOption('room', 'd')} type='button' className={`btn btnMinus ${option.room <= 1 ? 'btnDisable' : ''}`}>-</button>
							<span className='mx-3'>{option.room}</span>
							<button disabled={option.room >= 5} onClick={() => handleOption('room', 'i')} type='button' className={`btn btnPlus ${option.room >= 5 ? 'btnDisable' : ''}`}>+</button>
						</div>
					</div>
				</div>}
			</div>
			<div className="searchItem">
				<Link href={'/hotels'}><a><Button type="search" text="Search" /></a></Link>
			</div>
		</div>
	)
}

export default SearchFilter