import React from 'react'
// import chef1 from "/chef1.png";
// import chef2 from "/chef2.png";
// import chef3 from "/chef3.png";
// import chef4 from "/chef4.png";
import Image from "next/image"

const OurChefs = () => {
    return (
      <div className="bg-black text-white min-h-screen py-12 px-4">
        {/* Top Center Text */}
        <div className="text-center text-yellow mb-8">
          <h1 className="text-yellow-500 text-4xl font-bold mb-2">Meet Our Chefs</h1>
          <p className="text-lg text-gray-400 hover:text-yellow-600">
            Passionate creators of the finest culinary experiences
          </p>
        </div>
  
        {/* Images Row */}
        <div className="flex justify-center items-center space-x-6">
          {/* Chef Images */}
          <div className="w-64 h-54 bg-gray-700 rounded-lg shadow-lg overflow-hidden">
            <img
              src="/image (4).png"
              alt="Chef 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-64 h-54 bg-gray-700 rounded-lg shadow-lg overflow-hidden">
            <img
              src="/image (5).png"
              alt="Chef 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-64 h-54 bg-gray-700 rounded-lg shadow-lg overflow-hidden">
            <img
              src="/image (6).png"
              alt="Chef 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-64 h-54 bg-gray-700 rounded-lg shadow-lg overflow-hidden">
            <img
              src="/image (7).png"
              alt="Chef 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
  
        {/* See More Button */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-yellow-300">
            See More
          </button>
        </div>
      </div>
    );
  };

export default OurChefs
