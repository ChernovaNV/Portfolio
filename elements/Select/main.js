class Filter {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.items = options.items;
    this.$label = this.$el.querySelector('.filter__label');

    this.$label.textContent = this.items[0].label;

    this.$el.addEventListener('click', event => {
      if (event.target.classList.contains('filter__label')) {
        this.$el.classList.contains('open') ? this.close() : this.open()
      } else if (event.target.tagName.toLowerCase() === 'li') {
        this.select(event.target.dataset.id)
      }
    });

    const itemsHTML = this.items.map(i => {
      return `<li data-id="${i.id}" class="filter__item">${i.label}</li>`
    }).join(' ');

    this.$el.querySelector('.filter__menu').insertAdjacentHTML('afterbegin', itemsHTML);
  }

  select(id) {
    const item = this.items.find(i => i.id === id);

    this.$label.textContent = item.label;
    this.close();
  }

  open() {
    this.$el.classList.add('open')
  }

  close() {
    this.$el.classList.remove('open')
  }
}

const filter = new Filter('#filter', {
  items: [
    { label: 'Все статьи',  id: 'all'     },
    { label: 'Город',       id: 'city'    },
    { label: 'Книги',       id: 'books'   },
    { label: 'Путешествия', id: 'travel'  },
    { label: 'Рецепты',     id: 'recepts' },
    { label: 'Фотографии',  id: 'photos'  },
  ]
});