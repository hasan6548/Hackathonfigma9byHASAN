"use client"
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Hero = () => {
    const router = useRouter();
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-black-100 p-8">
      {/* Left Content */}
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-2xl font-Great Vibes text-yellow-400">
        𝓘𝓽𝓼 𝓠𝓾𝓲𝓬𝓴 & 𝓐𝓶𝓾𝓼𝓲𝓷𝓰!
        </h1>
        <p className="text-6xl mt-4 text-white-600">
        The Art of speed
        food Quality
        </p>
        <p className="text-l mt-4 text-white-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Varius sed pharetra dictum neque massa congue
        </p>
        <div className="mt-6">
          <button onClick={()=>router.push("/menulist")} className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600">
            See Menu 
          </button >
        </div>
      </div>
      {/* Right Content */}
<div className="mt-8 md:mt-0 relative flex justify-center">
  {/* Left Image (Under Main Image) */}
  <img
    src="/image 68.png" 
    alt="Side dish"
    className="absolute top-1/4 left-[-60px] w-40 h-30  rounded-lg shadow-md z-0"
  />

  {/* Right Image (Under Main Image) */}
  <img
    src="/image 68.png" 
    alt="Another dish"
    className="absolute top-1/4 right-[-60px] w-40 h-30 rounded-lg shadow-md z-0"
  />

  {/* Main Image (On Top) */}
  <img
    src="/Rectangle 8926.png" 
    alt="Delicious food"
    className="w-full max-w-md rounded-lg shadow-lg z-10"
  />
</div>

  
     
    </section>
  );
};

export default Hero;
