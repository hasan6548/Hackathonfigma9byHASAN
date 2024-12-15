"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const blogImages = [
  {
    id: 1,
    image: "/Blog/blogmain1.jpeg",
    title: "10 Reasons To Do A Digital Detox Challenge",
  },
  {
    id: 2,
    image: "/Blog/blogmain2.jpeg",
    title: "Exploring Digital Wellness Strategies",
  },
  {
    id: 3,
    image: "/Blog/blogmain3.jpeg",
    title: "The Impact of Technology on Mental Health",
  },
  {
    id: 4,
    image: "/Blog/blogmain4.jpeg",
    title: "Balancing Screen Time and Real Life",
  },
];

const sideImages = [
  {
    id: 1,
    image: "/Blog/recentpost1.jpeg",
    title: "Recent Post 1",
    date: "June 22, 2020",
    description: "Lorem ipsum dolor sit cingelit, sed do.",
  },
  {
    id: 2,
    image: "/Blog/recentpost2.jpeg",
    title: "Recent Post 2",
    date: "June 22, 2020",
    description: "Lorem ipsum dolor sit cingelit, sed do.",
  },
  {
    id: 3,
    image: "/Blog/recentpost3.jpeg",
    title: "Recent Post 3",
    date: "June 22, 2020",
    description: "Lorem ipsum dolor sit cingelit, sed do.",
  },
  {
    id: 4,
    image: "/Blog/recentpost4.jpeg",
    title: "Recent Post 4",
    date: "June 22, 2020",
    description: "Lorem ipsum dolor sit cingelit, sed do.",
  },
];

const filterManu = [
  {
    id: 1,
    image: "/Blog/Filtermanu1.jpeg",
    title: "Chicken Fry",
    available: "26",
  },
  {
    id: 2,
    image: "/Blog/Filtermanu2.jpeg",
    title: "Burger Food",
    available: "46",
  },
  {
    id: 3,
    image: "/Blog/Filtermanu3.jpeg",
    title: "Pizza",
    available: "16",
  },
  {
    id: 4,
    image: "/Blog/Filtermenu4.jpeg",
    title: "Fresh Fruits",
    available: "36",
  },
  {
    id: 5,
    image: "/Blog/Filtermanu5.jpeg",
    title: "Vegetables",
    available: "16",
  },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [images] = useState({ blogImages, sideImages, filterManu });

  return (
    <div className="container mx-auto px-4 py-6 sm:py-10">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Main Blog Content */}
        <div className="w-full lg:w-2/3 xl:w-3/4 space-y-8">
          {images.blogImages.map((item) => (
            <div 
              key={item.id} 
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow hover:shadow-xl"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 75vw"
                  className="object-cover"
                />
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 space-x-3 sm:space-x-4">
                  <div className="flex items-center">
                    <Image
                      src="/Blog/celender.png"
                      alt="Calendar"
                      width={20}
                      height={20}
                      className="mr-1 sm:mr-2"
                    />
                    <span>Feb 14, 2022</span>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/Blog/massage.png"
                      alt="Comments"
                      width={20}
                      height={20}
                      className="mr-1 sm:mr-2"
                    />
                    <span>3 Comments</span>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/Blog/admin.png"
                      alt="Admin"
                      width={20}
                      height={20}
                      className="mr-1 sm:mr-2"
                    />
                    <span>Admin</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  {item.title}
                </h2>

                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet.
                </p>

                <Button className="w-full sm:w-auto text-sm sm:text-base bg-orange-500 text-white hover:bg-orange-600 transition-colors rounded-lg px-4 sm:px-6 py-2 sm:py-3">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3 xl:w-1/4 space-y-6">
          {/* Search Bar */}
          <div className="flex mb-4 sm:mb-6">
            <input
              type="text"
              placeholder="Search Your Keyword"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow text-sm sm:text-base bg-gray-100 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 py-2 px-3 sm:px-4"
            />
            <Button className="bg-orange-500 text-white p-2 sm:p-3 rounded-r-lg hover:bg-orange-600">
              🔍
            </Button>
          </div>

          {/* Recent Posts Section */}
          <div className="border rounded-lg p-3 sm:p-4 bg-white shadow-md">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Recent Posts</h3>
            {images.sideImages.map((img) => (
              <div key={img.id} className="flex mb-3 sm:mb-4 space-x-3 sm:space-x-4 items-center">
                <div className="relative w-1/3 aspect-square">
                  <Image
                    src={img.image}
                    alt={img.title}
                    fill
                    sizes="(max-width: 768px) 33vw, 25vw"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs sm:text-sm font-semibold">{img.title}</h4>
                  <p className="text-[10px] sm:text-xs text-gray-500">{img.date}</p>
                  <p className="text-[10px] sm:text-xs text-gray-600 mt-1 sm:mt-2">
                    {img.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Filter By Manu */}
          <div className="border rounded-lg p-3 sm:p-4 bg-white shadow-md">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Filter By Manu</h3>
            {images.filterManu.map((index) => (
              <div 
                key={index.id} 
                className="flex mb-3 sm:mb-4 space-x-3 sm:space-x-4 items-center"
              >
                <div className="relative w-1/3 aspect-square">
                  <Image
                    src={index.image}
                    alt={index.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="flex-1 flex font-extrabold lg:text-2xl md:text-2xl justify-between items-center">
                  <h4 className="text-xs lg:text-2xl md:text-2xl sm:text-sm font-semibold">{index.title}</h4>
                  <p className="text-[10px] lg:text-xl md:text-xl sm:text-xs text-gray-600">{index.available}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}