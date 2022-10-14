import React from 'react';
import Country from './Country';
import { propertyCountryData } from './propertyCountryData';


const PropertyCountry = () => {
  return (
    <section className='propertyCountry mb-4 mb-lg-5'>
      <div className="container">
        <div className="sectionHeading mb-4">
          <h3>Travel with Country</h3>
          <p>Select a Country to start browsing</p>
        </div>
        <div className="row g-4 row-cols-1 row-cols-md-3">
          {propertyCountryData.map((item) => (
            <Country key={item.location} location={item.location} flag={item.flag} img={item.img} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default PropertyCountry