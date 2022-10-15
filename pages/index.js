import React from 'react';
import Header from '../components/header/Header';
import Offer from '../components/offer/Offer';
import PropertyCategory from '../components/propertyCategory/PropertyCategory';
import PropertyCountry from '../components/propertyCountry/PropertyCountry';
import Subscriber from '../components/subscriber/Subscriber';

const Home = () => {
  return (
    <>
      <Header />
      <Offer />
      <PropertyCategory />
      <PropertyCountry />
      <Subscriber />

    </>
  )
}

export default Home