import { HiLocationMarker } from 'react-icons/hi';
import Header from "../../components/header/Header";
import Subscriber from '../../components/subscriber/Subscriber';
import Footer from '../../components/footer/Footer';
import Button from '../../components/UI/Button';
import Image from 'next/image';

const HotelDetails = () => {

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];


  return (
    <>
      <Header isHeaderSearch='false' />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Tower Street Apartments <Button text='Reserve or Book Now!' /></h1>
          <div className="hotelAddress">
            <HiLocationMarker />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <Image src={photo.src} className="hotelImg" width={1280} height={853} />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h2 className="hotelTitle">Stay in the heart of City</h2>
              <p className="hotelDesc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae doloremque cupiditate atque corporis animi debitis nesciunt! Incidunt sunt quam tempore!
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h2>Perfect for a 9-night stay!</h2>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h4>
                <b>$945</b> (9 nights)
              </h4>
              <Button text='Reserve or Book Now!' />
            </div>
          </div>
        </div>
      </div>

      <Subscriber />
      <Footer />
    </>
  );
};

export default HotelDetails;