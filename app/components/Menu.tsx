"use client"
import { useState } from "react";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-800 focus:outline-none"
        >
          {/* Icon or text for menu toggle */}
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-10">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <a href="#home" className="text-grey-800 hover:text-yellow-600">
                Home
              </a>
            </li>
            <li>
            <a href="/Menulist" className="text-grey-800 hover:text-yellow-600">
            Menu
          </a>
            </li>
            <li>
            <a href="/Blog" className="text-grey-800 hover:text-yellow-600">
            Blog
          </a>
            </li>
            <li>
            <a href="/Pages" className="text-grey-800 hover:text-yellow-600">
            Pages
          </a>
            </li>
            <li>
              <a href="/about" className="text-grey-800 hover:text-yellow-600">
                About
              </a>
            </li>
            <li>
              <a href="/Shop" className="text-grey-800 hover:text-yellow-600">
                Shop
              </a>
            </li>
            <li>
              <a href="/contact" className="text-grey-800 hover:text-yellow-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
