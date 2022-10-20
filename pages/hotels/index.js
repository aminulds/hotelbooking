
import TopNav from '../../components/header/TopNav';
import Navbar from '../../components/header/Navbar';
import { format } from 'date-fns';

import { useStateContext } from '../../context/ContextProvider';
import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Button from '../../components/UI/Button';
import HotelItem from '../../components/hotelItem/HotelItem';
import { hotelData } from './hotelData';
import Subscriber from '../../components/subscriber/Subscriber';
import Footer from '../../components/footer/Footer';


const Hotels = () => {
  const { destination, date, setDate, option, openDateRange, setopenDateRange } = useStateContext();


  return (
    <>
      <header className='header'>
        <div className="container">
          <TopNav />
          <Navbar />
        </div>
      </header>

      <section className='hotels'>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="seachFilter p-3">
                <h4 className='text-center'>Search</h4>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Destination</label>
                    <input type='text' className="form-control" placeholder={destination} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Check-in-Date</label>
                    <p className='checkDate mb-0 bg-light p-2 rounded ' onClick={() => setopenDateRange(!openDateRange)}>{`${format(date[0].startDate, 'dd-MM-yyyy')} to ${format(date[0].endDate, 'dd-MM-yyyy')}`}</p>
                  </div>
                  <div className='mb-3'>
                    {openDateRange &&
                      <DateRange
                        onChange={(item) => setDate([item.selection])}
                        minDate={new Date()}
                        ranges={date}
                      />
                    }
                  </div>
                  <div className='mb-3'>
                    <label>Options</label>
                    <div className="optItem mb-3 d-flex flex-column">
                      <label>Min Price per night </label>
                      <input type="number" className='form-control mt-1' placeholder='' />
                    </div>
                    <div className="optItem mb-3 d-flex flex-column">
                      <label>Max Price per night </label>
                      <input type="number" className='form-control mt-1' placeholder='' />
                    </div>
                    <div className="optItem mb-3 d-flex">
                      <label>Adult </label>
                      <input min={1} type="number" className='form-control' placeholder={option.adult} />
                    </div>
                    <div className="optItem mb-3 d-flex">
                      <label>Children </label>
                      <input min={0} type="number" className='form-control' placeholder={option.children} />
                    </div>
                    <div className="optItem d-flex">
                      <label>Room </label>
                      <input min={1} type="number" className='form-control' placeholder={option.room} />
                    </div>
                  </div>
                  <div className='mt-4 d-flex align-items-center justify-content-center'>
                    <Button type='button' text="Search" />
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-8">
              <div className="serachResult">
                {hotelData.map((item) => (
                  <HotelItem key={item.title} img={item.img} title={item.title} rating={item.rating} charge={item.charge} />
                ))}

              </div>
            </div>
          </div>
        </div>

      </section>

      <Subscriber />
      <Footer />
    </>
  )
}

export default Hotels