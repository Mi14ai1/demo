import Swiper from '../../vendor/swiper.js';

const slider = document.querySelector('.intro-slider');

const initIntroSlider = () => {
  if (!slider) {
    return;
  }

  const introSlider = new Swiper('.intro-slider', {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: '.js-slider-next',
      prevEl: '.js-slider-prev',
    },/*
    autoplay: {
      delay: 15000,
      disableOnInteraction: false,
    }, */
  });

};

export {initIntroSlider};
