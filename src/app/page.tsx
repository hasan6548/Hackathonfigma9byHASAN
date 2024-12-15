import React from 'react'
import HomePage from '@/components/HomePages/HomeHero'
import FoodCategory from '@/components/HomePages/FoodCatagery' 
import OurChefs from '@/components/HomePages/OurChefs'
import Experienc from '@/components/HomePages/Experienc'
import WhyChouseUs from '@/components/HomePages/WhyChooseUs'
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/HomePages/WhyChooseUs'

const Home = () => {
  return (
    <div>
      <HomePage />
      <FoodCategory />
      <WhyChooseUs />
      <Experienc/>
      <OurChefs />
      <Testimonials/>
    </div>
  )
}

export default Home
