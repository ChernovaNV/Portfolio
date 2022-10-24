const navToggle = document.querySelector('.nav-toggle'),
  nav = document.querySelector('.nav');

/*Смена кнопки бургер-меню, Открытие/закрытие панели навигации */
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('nav-toggle--open');
  nav.classList.toggle('nav--open');
})