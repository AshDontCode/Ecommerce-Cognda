// Footer.js
// import React from 'react';
import './Hero.css';
import first from './Assets/product_20.png'
import second from './Assets/product_1.png'
import third from './Assets/product_36.png'
import fourth from './Assets/product_13.png'


export const Hero = () => {
  return (
    <>
    <h1 className='pop-heading'>Popular in Fashion</h1>
  
    <div className="image-grid">
    <div className="image">
      <img src={first} alt="Image 1" />
    </div>
    <div className="image">
      <img src={second} alt="Image 2" />
    </div>
    <div className="image">
      <img src={third} alt="Image 3" />
    </div>
    <div className="image">
      <img src={fourth} alt="Image 4" />
    </div>
  </div>

  </>
  );
};

