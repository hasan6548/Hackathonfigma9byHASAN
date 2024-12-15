import { Clock } from 'lucide-react'

export default function AboutUsSection() {
  return (
    <div className="about-us w-full md:w-[400px]">
      <h2 className="text-lg font-bold mb-2">Still You Need Our Support?</h2>
      <p className="text-sm mb-4">
        Don’t wait, make a smart & logical quote here. It’s pretty easy.
      </p>
      <div className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 w-full text-black rounded-l"
        />
        <button className="bg-yellow-500 px-4 py-2 text-white font-bold rounded-r hover:bg-blue-600">
          Subscribe
        </button>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">About Us.</h3>
        <p className="mb-6 text-[18px] leading-[26px]">
          Corporate clients and leisure travelers rely on Groundlink for dependable, safe, and professional chauffeured car service in major cities worldwide.
        </p>
        <div className="flex items-start">
          <div className="bg-[#FF9F0D] p-2 rounded mr-4 w-[70px] h-[70px] flex items-center justify-center">
            <Clock className="text-white text-3xl" />
          </div>
          <div>
            <h4 className="font-semibold">Opening Hours</h4>
            <p className="text-sm">Mon - Sat (8.00 - 6.00)</p>
            <p className="text-sm">Sunday - Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}