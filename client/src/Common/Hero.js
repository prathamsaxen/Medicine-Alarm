import React from 'react';
import { Carousel } from 'antd';
import Images from './Images';
const contentStyle = {

  color: '#fff',
  backgroundImage: `url(${Images.HeroBg})`,
  minHeight:'100vh'
 
  
};

const Hero = (props) => (
  <Carousel  className={props.className}>
    <div  >
  <div className="hero" style={contentStyle} >
    <img src={Images.medicin} alt="Hero Image" />
    <div className="hero-text">
      <h1>Welcome to Our Website</h1>
      <p>Discover the latest trends, tips, and techniques in our industry</p>
      <a href="#">Learn More</a>
    </div>
  </div>
</div>

<div >
  
  <div className="hero" style={contentStyle} >
    <img src={Images.aboutMedicine} alt="Hero Image" />
    <div className="hero-text">
      <h1>Welcome to Our Website</h1>
      <p>Discover the latest trends, tips, and techniques in our industry</p>
      <a href="#">Learn More</a>
    </div>
  </div>
</div>
    <div>
    <div className="hero" style={contentStyle} >
    
    <img src={Images.medicin} alt="Hero Image" />
    <div className="hero-text">
      <h1>Welcome to Our Website</h1>
      <p>Discover the latest trends, tips, and techniques in our industry</p>
      <a href="#">Learn More</a>
    </div>
  </div>
    </div>
    <div>
    <div className="hero" style={contentStyle} >
    <img src={Images.medicines} alt="Hero Image" />
    <div className="hero-text">
      <h1>Welcome to Our Website</h1>
      <p>Discover the latest trends, tips, and techniques in our industry</p>
      <a href="#">Learn More</a>
    </div>
  </div>
    </div>
  </Carousel>
);

export default Hero;