const accordions = document.querySelectorAll('.accordion');

const checkButtonHeight = () => {
  if (!accordions) {
    return;
  }

  accordions.forEach((accordion) => {

    const accordionButtons = accordion.querySelectorAll('.accordion__button');

    accordionButtons.forEach((btn) => {
      const parent = btn.parentElement;
      const btnHeight = btn.clientHeight;
      const contentHeight = parent.querySelector('.accordion__content').clientHeight;

      parent.style.setProperty('--btnHeight', `${btnHeight + 4}px`);
      parent.style.setProperty('--contentHeight', `${contentHeight}px`);
    });

  });

};

const initAccordion = () => {

  if (!accordions.length) {
    return;
  }

  checkButtonHeight();

  accordions.forEach((accordion) => {


    accordion.addEventListener('click', (e) => {
      const button = e.target.closest('.accordion__button');

      if (!button) {
        return;
      }

      checkButtonHeight();

      const accordionItem = button.parentElement;

      accordionItem.classList.toggle('is-active');

    });
  });
};

window.addEventListener('resize', checkButtonHeight);

export {initAccordion};
