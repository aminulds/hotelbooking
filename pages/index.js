import React from 'react';
import Header from '../components/header/Header';
import Offer from '../components/offer/Offer';
import PropertyCategory from '../components/propertyCategory/PropertyCategory';
import PropertyCountry from '../components/propertyCountry/PropertyCountry';

const Home = () => {
  return (
    <>
      <Header />
      <Offer />
      <PropertyCategory />
      <PropertyCountry />
    </>
  )
}

export default Home