/* Show contacts */
const contactsBtn = document.querySelector('.contacts__btn'),
      contactsContent = document.querySelector('.contacts__content');

contactsBtn.addEventListener('click', () => {
  contactsContent.classList.toggle('active');
});

/* Show tabs*/
const navList = document.querySelector('.nav__list');

navList.addEventListener('click', (e) => {
  const id = e.target.dataset.tab;
  const navBtns = navList.querySelectorAll('.nav__btn');

  navBtns.forEach((btn) => {
    const btnId = btn.dataset.tab;
    document.getElementById(btnId).style.display = "none";
  })
  console.log(document.getElementById(id));

  document.getElementById(id).style.display = "flex";
})