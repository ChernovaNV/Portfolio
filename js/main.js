"use strict";

var PROJECTS = [{
  name: 'Приложение погоды',
  img: 'images/WeatherApp.png',
  tools: ['React Native', 'Expo'],
  properties: ['семантическая разметка', 'адаптив', 'кроссплатформенность'],
  linkSite: 'projects/Weather-app/index.html',
  linkCode: 'https://github.com/ChernovaNV/WeatherApp',
  descs: [{
    subtitle: 'Описание и особенности проекта:',
    desc: 'Приложение, показывающее актуальную погоду в одном из двух городов (Омск, Петропавловск-Комчатский)'
  }, {
    subtitle: 'Функционал:',
    listComplite: ['данные о погоде загружаются c помощью axios с api.openweathermap.org;', 'изменение города между Омском и Петропавловкс-Комчатским при нажатии на кнопку «Сменить город»;', 'обновление температуры при изменении температурной шкалы;', 'задний фон и изображение погоды изменяются в зависимости от текущей погоды;', 'при загрузке страницы в зависимости от ширины экрана пользователя устанавливаются значения размеров.']
  }]
}, {
  name: 'Сайт аренды транспортного средства (Pepelane)',
  img: 'images/Rent of vehicles.png',
  tools: ['React', 'Redux', 'TypeScript','React Router', 'SCSS', 'BEM-naming'],
  properties: ['семантическая разметка', 'адаптив', 'кроссбраузерность'],
  linkSite: 'https://chernovanv.github.io/React-Vehicles-Rent/',
  linkCode: 'https://github.com/ChernovaNV/React-Vehicles-Rent',
  descs: [{
    subtitle: 'Описание и особенности проекта:',
    desc: 'Небольшой адаптивный, кроссбарузерный сайт для выбора транспортного средства в аренду'
  }, {
    subtitle: 'Функционал:',
    listComplite: ['иммитация загрузки данных с сервера и переход на страницу ошибки, в случае не получения данных (вероятность 35%);', 'модальное окно для добавления нового транспортного средства;', 'загрузка детальной страницы по id выбранного элемента;', 'маршрутизация.']
  }]
}, {
  name: 'Интернет-магазин (Кошки)',
  img: 'images/Shop-cats.png',
  tools: ['JavaScript', 'HTML', 'CSS'],
  properties: ['семантическая разметка', 'адаптив', 'кроссбраузерность', 'анимация'],
  linkSite: 'projects/Shop-cats/index.html',
  linkCode: 'https://github.com/ChernovaNV/3s.Shop-cats',
  descs: [{
    subtitle: 'Описание и особенности проекта:',
    desc: 'Небольшой адаптивный, кроссбарузерный интеренет магазин для продажи породистых кошек.'
  }, {
    subtitle: 'Функционал:',
    listComplite: ['сортировка карточек (по возрасту, цене);', 'добавлена анимация бургер меню, чекбокса, кнопки добавления в избранное;', 'плавная прокрутка наверх;', 'валидация формы. выведение предупреждения о неверно введенном адресе, блокирование  кнопки при отсутствии введенного адреса и выбранного чекбокса подписаться', 'при клике на сердце, появляется объявление о добавлении/удалении из избранного, меняется вид кнопки;', 'динамическое добавление карточек на страницу;', 'добавление еще 6 карточек на страницу при нажатии на кнопку «Показать еще»;', 'указание количества найденных животных в шапке сайта.']
  }]
}, {
  name: 'Таймер',
  img: 'images/Timer.png',
  tools: ['JavaScript', 'HTML', 'CSS'],
  properties: ['audio', 'video'],
  linkSite: 'projects/Timer/index.html',
  linkCode: 'https://github.com/ChernovaNV/4a.Countdown-Timer',
  descs: [{
    subtitle: 'Описание и особенности проекта:',
    desc: 'Таймер отсчета времени до нового года. Таймер специально установлен на 20 сек.'
  }, {
    subtitle: 'Функционал:',
    listComplite: ['установлен звук отсчета секунд. для включения необходимо нажать кнопку в правом верхнем углу;', 'после истечения таймера начинает играть новогодняя мелодия и начинается воспроизведение видео, а также изменяется надпись;', 'для отсчета таймера может быть установлена любая дата;', 'если установленная дата прошла ранее, отсчет производится не будет.']
  }]
}, {
  name: 'Журнал (Fashion)',
  img: 'images/Fashion.png',
  tools: ['HTML', 'SCSS', 'Grid', 'BEM-naming', 'JavaScript'],
  properties: ['Семантическая разметка'],
  linkSite: 'projects/Fashion/index.html',
  linkCode: 'https://github.com/ChernovaNV/1a.Fashion',
  descs: [{
    subtitle: 'Особенности проекта:',
    desc: 'Электронный журнал, написанный на css grid с возможностью перелистывания страниц при нажатии на кнопки, а также возможность выбора пользователем количества страниц, отображаемых на экране, в зависимости от размеров экрана.'
  }]
}, {
  name: 'Блог (Anne Sweet)',
  img: 'images/AnneSweet.png',
  tools: ['HTML', 'SCSS', 'Flexbox', 'BEM-naming', 'JavaScript'],
  properties: ['Семантическая разметка'],
  linkSite: 'projects/AnneSweet/index.html',
  linkCode: 'https://github.com/ChernovaNV/2s.Anne-Sweet',
  descs: [{
    subtitle: 'Страницы проекта:',
    desc: 'Главная страница, страница статьи (Примечание: все ccылки в "шапке" ведут на одну страницу статьи.).'
  }, {
    subtitle: 'Особенности проекта:',
    desc: 'Проект написан на HTML и препроцессоре SASS. Особенностью проекта для меня на тот момент было первое использование JavaScript и максимально симантичиная разметка, добавление анимации при наведении на элементы.'
  }, {
    subtitle: 'Функционал:',
    listComplite: ['изменение поля формы, если текст не соответствует требованиям (менее 20 символов или более 200);', 'добавление единицы к счетчику "лайков" при клике на "лайк" и убавление при вовторном нажатии (на странице статьи);', 'добавление нового комментария (на странице статьи);', 'фильтр статей по тегам (на главной странице);', 'изменение двух последних статей в разделе "Все статьи" на всю ширину контейнера;', 'добавление статей и элементов портфолио, при клике на кнопку "Показать еще";', 'скрытие кнопки "Показать еще" при отсутствии новых элементов;']
  }]
}, {
  name: 'Блог (Minimo)',
  img: 'images/Minimo.png',
  tools: ['HTML', 'SCSS', 'Flexbox', 'BEM-naming', 'JavaScript'],
  properties: ['Семантическая разметка', 'Адаптив'],
  linkSite: 'projects/Minimo/index.html',
  linkCode: 'https://github.com/ChernovaNV/1s.Minimo',
  descs: [{
    subtitle: 'Страницы проекта:',
    desc: 'Главная страница, страница статьи (Примечание: все ccылки в "шапке" ведут на одну страницу статьи.).'
  }, {
    subtitle: 'Функционал:',
    listComplite: ['изменение вида кнопки бургер меню;', 'появление/закрытие меню на мобильных устройствах и планшетах при нажатии на бургер-меню;', 'добавление новых статей при нажатии на кнопку "Load more" на главной странице;', 'скрытие кнопки "Load more" при отсутствии статей к добавлению.']
  }]
}];
"use strict";
"use strict";

/* Показать контакты */
var contactsBtn = document.querySelector('.contacts__btn'),
    contactsContent = document.querySelector('.contacts__content');
contactsBtn.addEventListener('click', function () {
  contactsContent.classList.toggle('active');
});
/* Показать вкладки */

var navList = document.querySelector('.nav__list');
navList.addEventListener('click', function (e) {
  var id = e.target.dataset.tab;
  var navBtns = navList.querySelectorAll('.nav__btn');
  navBtns.forEach(function (btn) {
    var btnId = btn.dataset.tab;
    document.getElementById(btnId).style.display = "none";
  });
  document.getElementById(id).style.display = "flex";
}); // создание проектов на странице

var projectContainer = document.querySelector('.projects'); //копирование каталога

var projects = JSON.parse(JSON.stringify(PROJECTS));

function tagsList(list) {
  var tools = [];
  list.forEach(function (item) {
    tools += "<li class=\"list__item\">".concat(item, "</li>");
  });
  return tools;
}

;

function desc(projectItem) {
  var descs = [];
  projectItem.descs.forEach(function (descItem) {
    if (descItem.subtitle !== undefined) {
      descs += "<h4 class=\"project__subtitle\">".concat(descItem.subtitle, "</h4>");
    }

    if (descItem.desc !== undefined) {
      descs += "<p class=\"project__desc\">".concat(descItem.desc, "</p>");
    }

    if (descItem.listComplite !== undefined) {
      var li = [];
      var ul = '';
      descItem.listComplite.forEach(function (item) {
        li += "<li>".concat(item, "</li>");
      });
      ul = "\n        <ul class=\"project__list list--completed\">\n          ".concat(li, "\n        </ul>\n      ");
      descs += ul;
    }
  });
  return descs;
}

function projetsBuild() {
  projects.forEach(function (projectItem) {
    projectContainer.innerHTML += "\n    <div class=\"project\">\n      <img src=\"".concat(projectItem.img, "\" alt=\"\u0424\u043E\u0442\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430\"  class=\"project__img\">\n      <div class=\"project__content\">\n        <div class=\"project__header\">\n          <div class=\"wrapper--list\">\n            <ul class=\"list\"> ").concat(tagsList(projectItem.tools), "</ul>\n            <ul class=\"list list--second\">").concat(tagsList(projectItem.properties), "</ul>\n          </div>\n          <div class=\"project__links\">\n            <a class=\"project__link\" href=\"").concat(projectItem.linkSite, "\" target=\"_blank\">\u0441\u0430\u0439\u0442</a>\n            <a class=\"project__link\" href=\"").concat(projectItem.linkCode, "\" target=\"_blank\">\u043A\u043E\u0434</a>\n          </div>\n        </div>\n\n          <h3 class=\"project__title\">").concat(projectItem.name, "</h3>\n          ").concat(desc(projectItem), "\n\n      </div>\n    </div>\n  ");
  });
}

;
projetsBuild();
//# sourceMappingURL=main.js.map
