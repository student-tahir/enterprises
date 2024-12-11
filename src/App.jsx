import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Home from './components/Home';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus/AboutUs';
import Product from './components/Product';

const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Home />
      <Aboutus />
      <Product />
      <Footer />
    </>
  );
}

export default App;




