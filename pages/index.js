import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Offer from '../components/offer/Offer';
import PropertyCategory from '../components/propertyCategory/PropertyCategory';
import PropertyCountry from '../components/propertyCountry/PropertyCountry';
import Subscriber from '../components/subscriber/Subscriber';

const Home = () => {
  return (
    <>
      <Header isHeaderSearch='true' />
      <Offer />
      <PropertyCategory />
      <PropertyCountry />
      <Subscriber />
      <Footer />

    </>
  )
}

export default Home