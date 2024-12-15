import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="bg-black text-white min-h-screen py-12 px-4">
      {/* Container */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section: Grid Images */}
        <div className="grid grid-cols-2 gap-4 md:w-2/3">
          {/* Top Left Image */}
          <div className="relative w-full h-56">
            <Image
              src="/tacos.png.png"
              alt="Tacos"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Top Right Image */}
          <div className="relative w-full h-56">
            <Image
              src="/unsplash_dphM2U1xq0U.png"
              alt="Burger"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Bottom Left Image */}
          <div className="relative w-full h-56">
            <Image
              src="/chick.png"
              alt="Chicken"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Bottom Right Image */}
          <div className="relative w-full h-56">
            <Image
              src="/unsplash_-GFCYhoRe48.png"
              alt="Burgers"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Right Section: Text Content */}
        <div className="md:w-1/3 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-orange-500 mb-4">
            Why Choose Us
          </h2>
          <h3 className="text-4xl font-bold mb-4 text-white">
            <span className="text-orange-500">Ex</span>traordinary taste <br />
            And Experienced
          </h3>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pellentesque bibendum nunc volutpat fringilla bibendum. Ut at augue
            urna, vitae tincidunt lorem orci.
          </p>

          {/* Feature Boxes */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
              <div className="text-orange-500 text-3xl">🍔</div>
              <span className="text-white">Fast Food</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
              <div className="text-orange-500 text-3xl">🍽️</div>
              <span className="text-white">Lunch</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
              <div className="text-orange-500 text-3xl">🍷</div>
              <span className="text-white">Dinner</span>
            </div>
          </div>

          {/* Experience Box */}
          <div className="flex items-center p-4 bg-orange-500 text-white rounded-lg">
            <div className="text-5xl font-bold mr-4">30+</div>
            <div>
              <span className="text-lg">Years of</span> <br />
              <span className="font-bold">Experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
