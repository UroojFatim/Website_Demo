// src/components/Navbar.jsx
import { FaShoppingCart, FaHeart, FaSearch, FaAngleDown } from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to handle dropdown visibility

  return (
    <nav>
      {/* Top Navbar Section */}
      <div className="bg-white h-16 flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="https://static.vecteezy.com/system/resources/previews/005/294/740/original/baby-logo-vector.jpg" alt="Logo" className="h-16" />
          <h1 className="text-pink-500 font-bold text-2xl">Lilsoft</h1>
        </div>

        {/* Search Bar and Dropdown */}
        <div className="flex items-center space-x-4 w-full max-w-xl">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 border-2  rounded-full"
          />
          {/* Search Button */}
          <button className="bg-pink-500 text-white p-2 rounded-full">
            <FaSearch />
          </button>
          {/* Dropdown */}
          <div className="relative">
            <select className="p-2 border rounded-full pr-8">
              <option value="categories">Categories</option>
              <option value="toys">Toys</option>
              <option value="clothes">Clothes</option>
              <option value="accessories">Accessories</option>
            </select>
            {/* Arrow Icon for the Dropdown */}
            {/* <FaAngleDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700" /> */}
          </div>
        </div>

        {/* Icons (Cart and Heart) */}
        <div className="flex items-center space-x-6">
          {/* Cart Icon with Notification */}
          <div className="relative">
            <FaShoppingCart className="text-2xl text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center">3</span>
          </div>
          {/* Heart Icon with Notification */}
          <div className="relative">
            <FaHeart className="text-2xl text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center">5</span>
          </div>
        </div>
      </div>

      {/* Bottom Navbar Section (Pink Background) */}
      <div className="bg-pink-500 h-12 flex justify-between items-center px-4"> 
        {/* Sort Dropdown */}
        <select className="p-2 bg-white text-gray-700 rounded-md">
          <option value="sort">Sort by</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>

        {/* Menu Links with Dropdown */}
        <div className="flex space-x-6 text-white font-semibold relative">
          <div
            className="relative group"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <a href="#" className="hover:text-gray-200 flex items-center">
              Home
              <FaAngleDown className="ml-2" />
            </a>
            {isMenuOpen && (
              <div className="absolute top-full left-0 bg-white text-gray-700 rounded shadow-md mt-2 w-40">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Submenu 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Submenu 2</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Submenu 3</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Submenu 4</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Submenu 5</a>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-gray-200">Baby Soap</a>
          <a href="#" className="hover:text-gray-200">Baba Dress</a>
          <a href="#" className="hover:text-gray-200">Baby Accessories</a>
          <a href="#" className="hover:text-gray-200">Shoes</a>
          <a href="#" className="hover:text-gray-200">Baby Dress</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
