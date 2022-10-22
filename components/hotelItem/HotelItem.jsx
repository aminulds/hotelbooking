import Link from "next/link";
import Image from "next/image";
import Button from "../UI/Button";

const HotelItem = ({ img, title, slug, rating, charge }) => {
  return (
    <div className="hotelItem">
      <Link href={`/hotels/${slug}`} >
        <a><Image src={img} alt={title} className="siImg" width={200} height={200} /></a>
      </Link>
      <div className="siDesc">
        <Link href={`/hotels/${slug}`}><a className="text-decoration-none"><h1 className="siTitle">{title}</h1></a></Link>

        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp p-2 bg-warning text-dark">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>{rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">${charge}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Button type='button' text='Availability' />
        </div>
      </div>
    </div>
  );
};

export default HotelItem;