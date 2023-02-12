import React from 'react'
import { useRef } from 'react'
import Hero from '../Common/Hero'
import About from './About'
import Contact from './Contact'
const Home = () => {

 
    const containerRef = useRef(null);
  
    const handleClick = () => {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <div>
      
        <Hero className="section-padding"/>
        <About/>
        <Contact/>
      
    </div>
  )
}

export default Home