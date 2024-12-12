import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaBars, FaTimes } from 'react-icons/fa'; // Correct icon imports
import Logo from "../../assets/Logo.png"; // Logo path

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false); // Mobile menu state

  return (
    <nav className="bg-gray-800 p-5">
      {/* Navbar container */}
      <div className="flex justify-between items-center">
        {/* Logo and title */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-white text-2xl font-bold">SR-Enterprises</h1>
        </div>

        {/* Mobile menu toggle */}
        <div className="sm:hidden" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
        </div>
      </div>

      {/* Navbar Links and Icons */}
      <div className={`flex flex-col sm:flex-row sm:space-x-6 items-center sm:items-center sm:justify-end ${isMobile ? 'block' : 'hidden sm:flex'}`}>
        {/* Links */}
        <Link to="/" className="text-white hover:text-gray-400 py-2 text-lg">Home</Link>
        <Link to="/product" className="text-white hover:text-gray-400 py-2 text-lg">Product</Link>

        {/* Route Link for About Us */}
        <Link 
          to="/aboutus" // Make sure this matches the route for your About Us page
          className="text-white hover:text-gray-400 py-2 text-lg"
        >
          About Us
        </Link>

        <Link to="/footer" className="text-white hover:text-gray-400 py-2 text-lg">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;















