let position = 0,
	 slidesToShow = 1,
	 slidesToScroll = 1,
	movePosition = 0;
const main = document.querySelector('.main'),
      container = document.querySelector('.slider__container'),
      track = document.querySelector('.slider__track'),
      btnPrev = document.querySelector('.btn--prev'),
      btnNext = document.querySelector('.btn--next'),
      btnsQuantityPages = document.querySelector('.quantity-pages__buttons'),

      itemWidth = document.querySelector('.slider__item').offsetWidth,
      itemsCount = document.querySelectorAll('.slider__item').length,
      btnsWidth = document.querySelector('.btn').clientWidth * 2;


/*Determining the size of the container and track depending on the number of sections on the page*/
const changeSlidersWidth = () => {
	main.style.width = `${(slidesToShow * itemWidth) + btnsWidth}px`;
	container.style.width = `${slidesToShow * itemWidth}px`;
	track.style.maxWidth = `${slidesToShow * itemWidth}px`;
	movePosition = slidesToScroll * itemWidth;
}
/* Track position determination */
const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}


/* The event of stopping scrolling when pressing the buttons, in the absence of pages further */
btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;

  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  changeSlidersWidth();
  setPosition();
  checkBtns();


});

btnNext.addEventListener('click', () => {
  const itemsRight = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -= itemsRight >= slidesToScroll ? movePosition : itemsRight * itemWidth;

	changeSlidersWidth();
  setPosition();
  checkBtns();

});



/* Change the number of pages on the screen */

btnsQuantityPages.addEventListener('click', (event) => {
  const target = event.target,
    btns = btnsQuantityPages.querySelectorAll('.btn--quantity-pages');

  btns.forEach ((btn) => {
  btn.classList.remove('used')
  });

  slidesToShow = slidesToScroll = target.value;
  target.classList.add('used');

  changeSlidersWidth();
})

changeSlidersWidth();