import React from 'react';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/autoplay';
import SliderItem from './SliderItem';
import { propertyCategoryData } from './propertyCategoryData';

const PropertyCategory = () => {
  return (
    <section className='propertyCategory'>
      <div className="container">
        <div className="sectionHeading">
          <h3 className='mb-3'>Browse by property type</h3>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
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