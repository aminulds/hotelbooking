import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/autoplay';
import SliderItem from './SliderItem';
import { propertyCategoryData } from './propertyCategoryData';

const PropertyCategory = () => {
  return (
    <section className='propertyCategory mb-4 mb-lg-5'>
      <div className="container">
        <div className="sectionHeading mb-4">
          <h3>Travel with style</h3>
          <p>Select an accommodation type to start browsing</p>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          speed={1500}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }}
        >
          {propertyCategoryData.map((item) => {
            return (
              <SwiperSlide key={item.type}>
                <SliderItem type={item.type} amount={item.amount} img={item.img} />
              </SwiperSlide>
            )
          })}

        </Swiper>
      </div>
    </section>
  )
}

export default PropertyCategory