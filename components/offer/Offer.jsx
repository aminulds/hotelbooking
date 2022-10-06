import React from 'react'
import { offerData } from './offerData'
import OfferItem from './OfferItem'

const Offer = () => {
  return (
    <section className='offer'>
      <div className="container">
        <div className="sectionHeading">
          <h3>Offers</h3>
          <p className='text-muted'>Promotions, deals, and special offers for you</p>
        </div>
        <div className="row row-cols-1 row-cols-md-2">
          {offerData.map((item) => <OfferItem title={item.title} descr={item.descr} btnText={item.btnText} img={item.img} />)}
        </div>
      </div>
    </section>
  )
}

export default Offer