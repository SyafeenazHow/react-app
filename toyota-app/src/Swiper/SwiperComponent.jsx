import React, { useEffect } from 'react';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


const SwiperComponent = () => {
  useEffect(() => {
    const mySwiper = new Swiper('.swiper-container', {
      // Swiper options here...
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    return () => {
      // Clean up Swiper instance on unmount
      mySwiper.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="swiper-container">
      {/* Additional required wrapper */}
      <div className="swiper-wrapper">
        {/* Slides */}
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
        {/* ... */}
      </div>
      {/* If we need navigation */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default SwiperComponent;
