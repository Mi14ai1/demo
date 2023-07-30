import {ScrollToPlugin} from '../vendor/gsap/ScrollToPlugin.min.js';
import {pageScroller} from '../utils/page-scroller.js';
import {gsap} from '../vendor/gsap/gsap.min.js';

const scrollToHandler = (evt) => {
  const button = evt.target.closest('[data-move-to]');
  if (!button) {
    return;
  }

  evt.preventDefault();

  const target = document.querySelector(button.dataset.moveTo);
  const buttonTop = button.getBoundingClientRect().top;
  const targetTop = target.getBoundingClientRect().top;
  const duration = Math.abs(buttonTop - targetTop) / (window.innerHeight * 1.5);

  const options = {
    duration,
    offset: 0,
  };

  gsap.to(window, options.duration, {
    scrollTo: {
      y: target,
      offsetY: options.offset,
    },
    ease: 'power4.out',
  });
};

export const initScrollTo = () => {
  gsap.registerPlugin(ScrollToPlugin);
  if (!document.querySelector('[data-move-to]')) {
    return;
  }

  window.addEventListener('click', scrollToHandler);
};
