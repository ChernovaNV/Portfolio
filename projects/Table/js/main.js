const requestURL = '../database/data.json';
const tableBody = document.getElementById('table-body');
const tableHead = document.getElementById('table-head');
const wrapper = document.getElementById('pagination-wrapper');

let state = {
  page: 1,
  rows: 10,
  btns: 5,
};

fetch(requestURL)
  .then(response =>  response.json())
  .catch(err => console.log(err))
  .then(dataTable => {
    buildTable(dataTable);
    changePage(dataTable);
    tableCort(dataTable);
  })


function pagination(data, page, rows) {

  const trimStart = (page - 1) * rows;
  const trimEnd = trimStart + rows;

  const trimmedData = data.slice(trimStart, trimEnd);

  const pages = Math.ceil(data.length / rows);

  return {
    querySet: trimmedData,
    pages: pages,
  }
}

function pageButtons(pages) {

  wrapper.innerHTML = ``;

  let maxLeft = (state.page - Math.floor(state.btns / 2));
  let maxRight = (state.page + Math.floor(state.btns / 2));

  if (maxLeft < 1) {
    maxLeft = 1
    maxRight = state.btns
  }

  if (maxRight > pages) {
    maxLeft = pages - (state.btns - 1)

    if (maxLeft < 1) {
      maxLeft = 1
    }
    maxRight = pages
  }

  for (let page = maxLeft; page <= maxRight; page++) {
    wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
  }

  if (state.page != 1) {
    wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
  }

  if (state.page != pages) {
    wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`
  }
}

function changePage(dataTable) {
  wrapper.addEventListener('click', event => {
    const $this = event.target;

    tableBody.innerHTML = ``;
    state.page = Number($this.value);

    buildTable(dataTable);
  })
}


function buildTable(dataTable) {
  let data = pagination(dataTable, state.page, state.rows);
  let myList = data.querySet;


  tableBody.innerHTML = ``;

  for (let i in myList) {
    let row = `<tr>
                  <td>${myList[i].id}</td>
                  <td>${myList[i].name}</td>
                  <td>${myList[i].price}</td>
                  <td>${myList[i].quantity}</td>
               `
    tableBody.innerHTML += row
  }

  pageButtons(data.pages);
}


function tableCort(dataTable) {
  tableHead.addEventListener('click', event => {
    const $this = event.target;
    const btns = document.querySelectorAll('th > button');
    const column = $this.dataset.column;
    let order = $this.dataset.order;
    let text = $this.textContent;

    text = text.substring(0, text.length - 1);

    if (order == 'down') {
      btns.forEach((btn) => {
        btn.setAttribute('data-order', 'up');
      })

      dataTable = dataTable.sort((a, b) => a[column] > b[column] ? 1 : -1);

    } else {
      btns.forEach((btn) => {
        btn.setAttribute('data-order', 'down');
      })

      dataTable = dataTable.sort((a, b) => a[column] < b[column] ? 1 : -1);
    }

    buildTable(dataTable);
  })
}


