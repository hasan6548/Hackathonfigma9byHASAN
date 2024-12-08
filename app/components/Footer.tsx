import React from "react";


const Footer = () => {
    return (
<footer className="bg-black text-white">
  {/* Top Section */}
  <div className="container mx-auto px-6 py-10 md:flex md:justify-between">
    {/* Email Subscription */}
    <div className="md:mr-auto">
      <div className="text-right mb-4 md:mb-0">
        <h2 className="text-lg font-bold mb-2">Still You Need Our Support ?</h2>
        <p className="text-sm mb-4">Don’t wait make a smart & logical quote here. Its pretty easy.</p>
        <div className="flex justify-end">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-64 text-black rounded-l"
          />
          <button className="bg-yellow-500 px-4 py-2 text-white font-bold rounded-r hover:bg-blue-600">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Middle Section: Four Rows */}
  <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
    {/* Column 1: About Us */}
    <div>
      <h3 className="text-lg font-bold mb-4">About Us.</h3>
      <p className="text-sm mb-4">
      orporate clients and leisure travelers has
been relying on Groundlink for dependab
safe, and professional chauffeured car
service in major cities across World.
      </p>
      <img src="/clockkkk.png" alt="Small image" className="mb-4" />
      <p className="text-sm">Opening Timings:</p>
      <p className="text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
    </div>

    {/* Column 2: Useful Links */}
    <div>
      <h3 className="text-lg font-bold mb-4">Useful Links</h3>
      <ul className="space-y-2">
        <li>
          <a href="#About" className="hover:underline">
          About
          </a>
        </li>
        <li>
          <a href="#News" className="hover:underline">
            News
          </a>
        </li>
        <li>
          <a href="#Partners" className="hover:underline">
          Partners
          </a>
        </li>
        <li>
          <a href="#Team" className="hover:underline">
            Team
          </a>
        </li>
        <li>
          <a href="#Menu" className="hover:underline">
            Menu
          </a>
        </li>
        <li>
          <a href="#Contact" className="hover:underline">
            Contact Us
          </a>
        </li>
      </ul>
    </div>

    {/* Column 3: Help */}
    <div>
      <h3 className="text-lg font-bold mb-4">Help?</h3>
      <ul className="space-y-2">
        <li>
          <a href="#faq" className="hover:underline">
            FAQ
          </a>
        </li>
        <li>
          <a href="#terms" className="hover:underline">
            Terms & Conditions
          </a>
        </li>
        <li>
          <a href="#Reporting" className="hover:underline">
          Reporting
          </a>
        </li>
        <li>
          <a href="#Documentation" className="hover:underline">
          Documentation
          </a>
        </li>
        <li>
          <a href="#SupportPolicy" className="hover:underline">
          Support Policy
          </a>
        </li>
        <li>
          <a href="#Privacy" className="hover:underline">
            Privacy
          </a>
        </li>
      </ul>
    </div>

    {/* Column 4: Recent Posts */}
    <div>
      <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
      <ul className="space-y-4">
        <li className="flex items-center">
          <img
            src="/unsplash_50KffXbjIOg.png"
            alt="Post 1"
            className="w-16 h-16 rounded mr-4"
          />
          <div>
            <p className="text-sm">Delicious Recipe</p>
            <p className="text-xs text-gray-400">November 25, 2024</p>
          </div>
        </li>
        <li className="flex items-center">
          <img
            src="/unsplash_CLMpC9UhyTo.png"
            alt="Post 2"
            className="w-16 h-16 rounded mr-4"
          />
          <div>
            <p className="text-sm">How to Cook</p>
            <p className="text-xs text-gray-400">December 1, 2024</p>
          </div>
        </li>
        <li className="flex items-center">
          <img
            src="/unsplash_CRoAeTh5S_I.png"
            alt="Post 3"
            className="w-16 h-16 rounded mr-4"
          />
          <div>
            <p className="text-sm">Best Kitchen Tips</p>
            <p className="text-xs text-gray-400">December 5, 2024</p>
          </div>
        </li>
      </ul>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="bg-gray-800 py-4">
    <div className="container mx-auto px-6 flex flex-wrap justify-between items-center">
      {/* Copyright Text */}
      <p className="text-xs text-gray-400">&copy; Copyright © 2022 by Ayeman. All Rights Reserved.</p>

      {/* Social Media Links */}
      <div className="flex space-x-4">
        <a href="#instagram" className="hover:text-pink-500">
          <img src=".png" alt="Instagram" className="w-5 h-5" />
        </a>
        <a href="#twitter" className="hover:text-blue-400">
          <img src=".png" alt="Twitter" className="w-5 h-5" />
        </a>
        <a href="#facebook" className="hover:text-blue-500">
          <img src=".png" alt="Facebook" className="w-5 h-5" />
        </a>
        <a href="#linkedin" className="hover:text-blue-600">
          <img src=".png" alt="LinkedIn" className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
</footer>
    );
};
export default Footer;