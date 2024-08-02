import React from 'react';
import './PhoneSlideshow.css';

const PhoneFrame = () => {
  return (
    <div className="phone-frame">
      <div className="slideshow">
        <img src="https://i.pinimg.com/564x/db/37/ab/db37ab63d810644b3b03df191448e5b6.jpg" alt="Slide 1" loading='lazy'/>
        <img src="https://i.pinimg.com/564x/71/9a/11/719a11f77d700cb335b0f09568988aaa.jpg" alt="Slide 2" loading='lazy'/>
        <img src="https://i.pinimg.com/564x/b0/af/4f/b0af4f0b00f97be10d2af01c39ec102d.jpg" alt="Slide 3"loading='lazy' />
        <img src="https://i.pinimg.com/564x/30/b2/a0/30b2a0a7ba5a9345e15056e7c50749d3.jpg" alt="Slide 4" loading='lazy'/>

      </div>
    </div>
  );
};

export default PhoneFrame;
