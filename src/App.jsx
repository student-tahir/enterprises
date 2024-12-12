import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Home from './components/Home';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus/AboutUs';
import Product from './components/Product/Product';
import Menu from './components/Menu/Menu';

const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Home />
      <Aboutus />
      <Product />
      <Menu />
      <Footer />
    </>
  );
}

export default App;




