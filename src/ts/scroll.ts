export {};

const scrollBtnEl = document.querySelector(
  '.js-scroll-to-top',
) as HTMLButtonElement;
const headerEl = document.querySelector('header');

scrollBtnEl.addEventListener('click', () => {
  headerEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
