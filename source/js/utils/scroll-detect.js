const scrollDetect = () => {
  return document.documentElement.clientHeight !== document.querySelector('body').clientHeight;
};

export {scrollDetect};
