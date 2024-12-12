import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Home from './components/Home';
import Aboutus from './components/Aboutus/AboutUs';
import Product from './components/Product/Product';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      {/* Navbar will be always visible */}
      <Navbar />

      {/* Carousel will be always visible */}
      <Carousel />

      {/* Define the Routes inside Routes component */}
      <Routes>
        {/* About Us Route */}
        <Route path="/aboutus" element={<Aboutus />} />

        {/* Default route for Home */}
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Other components like Product and Footer can be displayed globally */}
      <Product />
      <Menu/>
      <Footer />
    </Router>
  );
}

export default App;






