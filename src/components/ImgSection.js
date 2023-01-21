import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './ImgSection.css';
import gabriela from './images/gabi-y-pau.jpg'

function ImgSection() {
  return (
    <div className='img-container' style={{    
      flexShrink: '0',
      minWidth: '100%',
      minHeight: '100%'}}>
      <img  src={gabriela} alt="gabriela arias uriburu" style={{  objectFit: 'contain'}}></img>
    </div>
  );
}

export default ImgSection;
