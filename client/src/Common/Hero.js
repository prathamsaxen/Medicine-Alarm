import React from 'react';
import { Carousel } from 'antd';
import Images from './Images';
const contentStyle = {

  color: '#fff',
  background: "#1b7278",
  minHeight:'94vh',
  height:'max-content'
 
  
};

const Hero = (props) => (
  <Carousel  className={props.className} id="caraouselStart">
    <div  >
  <div className="hero row" style={contentStyle} >
    <div className="col-md-6">
    <img src={Images.medicin} alt="Hero" />
    </div>
    <div className="col-md-6">
    <div className="hero-text">
      <h1>Welcome to Medicine Alarm</h1>
      <p>Enter your Medicine and get time to time notifications for medicines dose</p>
      <button >Learn More</button>
    </div>
    </div>
  </div>
</div>

<div >
  
  <div className="hero row" style={contentStyle} >
    <div className="col-md-6">
    <img src={Images.aboutMedicine} alt="Hero" />
    </div>
    <div className="col-md-6">
    <div className="hero-text">
      <h1>Welcome to Our Website</h1>
      <p>Discover the latest trends, tips, and techniques in our industry</p>
      <button>Learn More</button>
    </div>
    </div>
  </div>
</div>
    <div>
    <div className="hero row" style={contentStyle} >
    <div className="col-md-6">
    <img src={Images.medicin} alt="Hero" />
    </div>
    <div className="col-md-6">
    <div className="hero-text">
      <h1>Welcome to Our Website</h1>
      <p>Discover the latest trends, tips, and techniques in our industry</p>
      <button>Learn More</button>
    </div>
    </div>
  </div>
    </div>
    <div>
    <div className="hero row" style={contentStyle} >
      <div className="col-md-6">
    <img src={Images.medicines} alt="Hero" />
    </div>
    <div className="col-md-6">
    <div className="hero-text">
      <h1>Welcome to Our Website</h1>
      <p>Discover the latest trends, tips, and techniques in our industry</p>
      <button>Learn More</button>
    </div>
    </div>
  </div>
    </div>
  </Carousel>
);

export default Hero;