const tabsControls = document.querySelector('.js-tabs-buttons');
const tabs = document.querySelector('.tabs');

const initTabs = () => {
  if (!tabsControls || !tabs) {
    return;
  }

  tabsControls.addEventListener('click', (e) => {

    const button = e.target.closest('.btn');
    if (button) {

      const currentActiveBtn = tabsControls.querySelector('.is-active');
      const currentActiveTab = tabs.querySelector('.tab:not(.visually-hidden)');

      if (currentActiveTab) {
        currentActiveTab.classList.add('visually-hidden');
      }

      if (currentActiveBtn) {
        currentActiveBtn.classList.remove('is-active');
      }

      button.classList.add('is-active');

      const currentTab = tabs.querySelector(`.tab[data-tab-name=${button.dataset.tabName}]`);

      currentTab.classList.remove('visually-hidden');
    }

  });
};

export {initTabs};
