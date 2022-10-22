import { hotelData } from './hotelData';
import HotelItem from './HotelItem';

const SearchResult = () => {
  return (
    <div className="serachResult">
      {hotelData.map((item) => (
        <HotelItem key={item.title} slug={item.title.replace(' ', '').toLocaleLowerCase()} img={item.img} title={item.title} rating={item.rating} charge={item.charge} />
      ))}

    </div>
  )
}

export default SearchResult