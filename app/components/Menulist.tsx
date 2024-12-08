import React from "react";
import Image from 'next/image';

const Menulist = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Starter Menu */}
        <div className="bg-black shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Starter Menu</h2>
          <ul>
            <li className="md:flex space-x-4 items-center text-grey-80 hover:text-yellow-600">
              <span>Asian Grilled Chicken Salad</span>
              <span className="font-semibold ">$22</span>
            </li>
            <li className="md:flex space-x-4 items-center text-grey-80 hover:text-yellow-600">
              <span>Tomato Basil Pizza</span>
              <span className="font-semibold">$18</span>
            </li>
            <li className="md:flex space-x-4 items-center text-grey-80 hover:text-yellow-600">
              <span>Spicy Vegan Potato Curry</span>
              <span className="font-semibold">$16</span>
            </li>
          </ul>
        </div>

        {/* Main Course */}
        <div className="bg-black shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Main Course</h2>
          <ul>
            <li className="md:flex space-x-4 items-center text-grey-80 hover:text-yellow-600">
              <span>Grilled Beef Steak</span>
              <span className="font-semibold">$35</span>
            </li>
            <li className="md:flex space-x-4 items-center text-grey-80 hover:text-yellow-600">
              <span>Cashew Chicken Stir-Fry</span>
              <span className="font-semibold">$30</span>
            </li>
            <li className="md:flex space-x-4 items-center text-grey-80 hover:text-yellow-600">
              <span>Vegetable & Cheese Salad</span>
              <span className="font-semibold">$20</span>
            </li>
          </ul>
        </div>

        {/* Desserts */}
        <div className="bg-black shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Dessert</h2>
          <ul>
            <li className="md:flex space-x-4 items-center text-grey-80 hover:text-yellow-600">
              <span>Fig and Lemon Cake</span>
              <span className="font-semibold">$12</span>
            </li>
            <li className="md:flex space-x-4 items-center text-grey-80 hover:text-yellow-600">
              <span>Crunchy Mascarpone</span>
              <span className="font-semibold">$15</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menulist;