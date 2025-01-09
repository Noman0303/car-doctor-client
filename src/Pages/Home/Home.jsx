import React from 'react'
import Banner from './Banner'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Products from './Products'
import Team from './Team'
import ChooseUs from './ChooseUs'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div className='text-center mx-auto'>
        <Banner></Banner>
        <About></About>
        <Services></Services>
        <Contact></Contact>
        <Products></Products>
        <Team></Team>
        <ChooseUs></ChooseUs>
        <Testimonial></Testimonial>
    </div>
  )
}

export default Home