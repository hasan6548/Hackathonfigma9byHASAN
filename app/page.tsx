import Navbar from "./components/Navbar";
import Image from "next/image";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Menulist from "@/app/components/Menulist";
import Chefs from "./components/Chefs";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <>
      <main>
      <Hero />
      <Menulist/>
      <Chefs/>
      <Testimonials/>
      </main>
    </>
  );
}
