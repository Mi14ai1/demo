import {resizeObserver} from '../utils/observers.js';
import {ScrollTrigger} from '../vendor/gsap/ScrollTrigger.min.js';

const sliderContainer = document.querySelector('[data-scroll-slider="parent"]');

export class ScrollSlider {

  constructor(slider) {
    if (!slider) {
      return;
    }

    this.container = slider;

    this.slides = this.container.querySelectorAll('[data-scroll-slider="slide"]');

    this.slidesCount = this.slides.length;

    this.currentSlide = 0;

    this.timeline = null;

    this.vpTouch = window.matchMedia('(pointer: coarse)');

    this.setSlider = this.setSlider.bind(this);
    this.switchSlide = this.switchSlide.bind(this);

    this.init();
  }

  switchSlide(scroll) {
    if (scroll.progress === 0) {
      this.currentSlide = 0;
    } else {
      this.currentSlide = Math.ceil((scroll.progress) / (1 / this.slidesCount)) - 1;
    }
    [...this.slides].map((slide) => slide.classList.remove('is-active'));
    this.slides[this.currentSlide].classList.add('is-active');
  }

  updateHeight() {
    this.height = this.slidesCount * window.innerHeight;
    this.container.style.minHeight = this.height + 'px';
  }

  setSlider() {
    this.updateHeight();

    if (this.timeline) {
      this.timeline.kill();
      this.timeline = null;
    }

    this.timeline = gsap.timeline({paused: true});
    ScrollTrigger.create({
      scroller: 'body',
      trigger: this.container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: this.switchSlide,
      animation: this.timeline,
    });
  }

  init() {
    this.setSlider();
    resizeObserver.subscribe(this.setSlider);
  }
}

export const initMainScrollSlider = () => {
  if (!sliderContainer) {
    return;
  }

  const scrollSlider = new ScrollSlider(sliderContainer);
};
