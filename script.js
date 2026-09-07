document.getElementById('year').textContent = new Date().getFullYear();

const menu = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menu.addEventListener('click', () => {
  const isOpen = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('is-open');
});
