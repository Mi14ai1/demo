const menuBtn = document.querySelector('.js-burger');
const menu = document.querySelector('.main-nav');
const menuLIst = document.querySelector('.main-nav__list');

const subMenu = menu ? menu.querySelectorAll('.sub-menu') : '';

console.log(subMenu);

const scrollWidth = window.innerWidth - document.querySelector('body').clientWidth;

const desktopBreak = window.matchMedia(`(max-width: ${1024 + scrollWidth}px)`);

const isSubDesktop = () => window.innerWidth + scrollWidth < 1024;

const addingMenu = () => {
  if (isSubDesktop()) {
    menu.classList.add('menu');
    menuLIst.classList.add('menu__list');
    menuBtn.style.display = 'block';
  } else {
    menu.classList.remove('menu');
    menuLIst.classList.remove('menu__list');
    menuBtn.style.display = 'none';
    document.querySelector('body').removeAttribute('style');
  }
};

const initMenu = () => {
  if (!menuBtn || !menu || !menuLIst) {
    return;
  }

  addingMenu();

  menuBtn.addEventListener('click', (e) => {
    menu.classList.toggle('is-open');

    if (document.querySelector('.menu.is-open') && isSubDesktop()) {
      document.querySelector('body').style.overflow = 'hidden';
      document.querySelector('body').style.height = '100vh';
    } else {
      document.querySelector('body').removeAttribute('style');
    }
  });

  desktopBreak.addEventListener('change', () => {
    console.log('check media');
    addingMenu();
  });

};

export {initMenu};
