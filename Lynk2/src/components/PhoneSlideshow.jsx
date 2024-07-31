import React, { useState, useEffect } from 'react';
import './PhoneSlideshow.css';

const images = [
  'https://i.pinimg.com/564x/db/37/ab/db37ab63d810644b3b03df191448e5b6.jpg',
  'https://i.pinimg.com/564x/71/9a/11/719a11f77d700cb335b0f09568988aaa.jpg',
  'https://i.pinimg.com/564x/b0/af/4f/b0af4f0b00f97be10d2af01c39ec102d.jpg',
  'https://i.pinimg.com/564x/30/b2/a0/30b2a0a7ba5a9345e15056e7c50749d3.jpg'
  
];

const PhoneSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <img src="" alt="Phone" className='phoneImage' style={styles.phoneImage} />
      <div style={styles.slideshow}>
        <img src={images[currentImageIndex]} alt="Slideshow" style={styles.slideshowImage} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '200px', 
    height: '400px', 
  },
  phoneImage: {
    width: '100%',
    height: '100%',
  },
  slideshow: {
    position: 'absolute',
    top: '15%', 
    left: '10%',
    width: '80%',
    height: '70%', 
    overflow: 'hidden',
  },
  slideshowImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default PhoneSlideshow;
