import {vhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initIntroSlider} from './modules/sliders/intro-slider.js';
import {initScrollTo} from './modules/init-move-to.js';
import {initMainScrollSlider} from './modules/scroll-slider.js';
import {initTabs} from './modules/tabs.js';
import {initAccordion} from './modules/accordion/init-accordion.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  vhFix();

  window.addEventListener('load', () => {
    initModals();
    initScrollTo();
    initIntroSlider();
    initMainScrollSlider();
    initTabs();

    initAccordion();
  });
});
