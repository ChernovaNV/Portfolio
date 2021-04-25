
let countColumn = 0;
const btnShowMore = document.querySelector('.load-more'),
      hiddenColumn = document.querySelectorAll('.column--hidden');

/*событие добавления статей по 3 шт*/
btnShowMore.addEventListener ('click', () => {
  for (let i = 0; countColumn < hiddenColumn.length && i < 3; i++, countColumn++) {
	hiddenColumn[countColumn].classList.remove('column--hidden');
  console.log(countColumn);
};
  delBtnMore();
});
/*удаление кнопки "Добавить еще"*/
const delBtnMore = () => {
  if (countColumn === hiddenColumn.length) {
    btnShowMore.hidden = true;
  }
}


