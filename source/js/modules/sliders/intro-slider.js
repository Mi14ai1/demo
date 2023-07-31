import Swiper from '../../vendor/swiper.js';

const slider = document.querySelector('.intro-slider');

const initIntroSlider = () => {
  if (!slider) {
    return;
  }

  const introSlider = new Swiper('.intro-slider', {
    loop: false,
    spaceBetween: 10,
    navigation: {
      nextEl: '.js-slider-next',
      prevEl: '.js-slider-prev',
    },
  });

};

export {initIntroSlider};
