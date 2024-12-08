import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-4xl text-left mb-12">
          <h3 className="text-4xl text-yellow-500 text-lg font-bold">𝓣𝓮𝓼𝓽𝓲𝓶𝓸𝓷𝓲𝓪𝓵𝓼</h3>
          <h2 className="text-4xl font-bold">What our client are saying</h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-white text-black rounded-lg shadow-lg p-8 md:w-3/4 mx-auto">
          {/* Overlapping Profile Picture */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
              <Image
                src="/Ellipse 6.png"
                alt="Client Image"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
          </div>

          {/* Quote Section */}
          <div className="text-center mt-12">
            <p className="text-yellow-500 text-4xl font-bold mb-4">❝</p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            </p>
          </div>

          {/* Star Ratings */}
          <div className="text-center mt-4">
            <div className="flex justify-center items-center space-x-1">
              <span className="text-yellow-500 text-xl">★</span>
              <span className="text-yellow-500 text-xl">★</span>
              <span className="text-yellow-500 text-xl">★</span>
              <span className="text-yellow-500 text-xl">★</span>
              <span className="text-gray-300 text-xl">★</span>
            </div>
            <h4 className="font-semibold mt-2">Alamin Hasan</h4>
            <p className="text-gray-500 text-sm">Food Specialist</p>
          </div>
        </div>

        {/* Dots Section */}
        <div className="flex justify-center mt-8 space-x-2">
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
