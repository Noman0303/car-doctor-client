import React from 'react'
import Banner from './Banner'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Products from './Products'
import Team from './Team'

const Home = () => {
  return (
    <div className='text-center'>
        <Banner></Banner>
        <About></About>
        <Services></Services>
        <Contact></Contact>
        <Products></Products>
        <Team></Team>
        
    </div>
  )
}

export default Home