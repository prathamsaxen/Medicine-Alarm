import React from 'react'
// import { useRef } from 'react'
import Hero from '../Common/Hero'
import About from './About'
import Contact from './Contact'
const Home = () => {


  return (
    <div id='HomePage'>
      
        <Hero className="section-padding"/>
        <About/>
        <Contact/>
      
    </div>
  )
}

export default Home