import React from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu"; // Adjust the path if necessary


const Navbar = () => {
    return (
      <nav className="flex justify-between items-center p-4 bg-white-200">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center ">
    <img src="/Foodtuck.png" alt="Logo" width={109} height={32} />
  </div>
  
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="/" className="text-grey-800 hover:text-yellow-600">
            Home
          </a>
          <a href="/menulist" className="text-grey-800 hover:text-yellow-600">
            Menu
          </a>
          <a href="#Blog" className="text-grey-800 hover:text-yellow-600">
            Blog
          </a>
          <a href="#Pages" className="text-grey-800 hover:text-yellow-600">
            Pages
          </a>
          <a href="#about" className="text-grey-800 hover:text-yellow-600">
            About
          </a>
          <a href="#Shop" className="text-grey-800 hover:text-yellow-600">
            Shop
          </a>
          <a href="#contact" className="text-grey-800 hover:text-yellow-600">
            Contact
          </a>
          
        </div>
    
        <input
            type="search"
            placeholder="Search.."
            className="px-4 py-2 w-64 text-black rounded-l"
          />
  
        {/* Mobile Menu */}
        <Menu />
      </nav>
    );
  };
  
  export default Navbar;
  