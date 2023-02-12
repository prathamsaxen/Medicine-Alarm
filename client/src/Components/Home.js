import  Footer  from '../Common/Footer'
import React from 'react'
import Hero from '../Common/Hero'
import Navbar from '../Common/Navbar'
import About from './About'
import Contact from './Contact'
const Home = () => {
  return (
    <div>
      
        <Hero className="section-padding"/>
        <About/>
        <Contact/>
      
    </div>
  )
}

export default Home