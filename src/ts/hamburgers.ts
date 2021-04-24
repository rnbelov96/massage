export {};

const topHeaderHamEl = document.querySelector('.js-ham-top') as HTMLButtonElement;
const topMenuEl = document.querySelector('.js-menu-top');

topHeaderHamEl.addEventListener('click', () => {
  topMenuEl?.classList.toggle('menu-show');
});
