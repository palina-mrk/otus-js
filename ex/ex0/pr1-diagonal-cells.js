createTable (document.body, 7);
addInputField (document.body, 'blue');
addButton (document.body, 'change color');

let btn = document.querySelector('button');
let tbl = document.querySelector('table');
let inp = document.querySelector('input');

inp.focus();

btn.addEventListener ( 'click', event => colorDiagonalCells(tbl, inp.value));
btn.addEventListener ( 'click', event => renewInputValue(inp,''));
btn.addEventListener ( 'click', event => inp.focus());

document.addEventListener('keypress'
  , event => (event.key == 'Enter' ? colorDiagonalCells(tbl, inp.value) : null));
document.addEventListener('keypress'
  , event => (event.key == 'Enter' ? renewInputValue(inp,'') : null));
document.addEventListener('keypress'
  , event => (event.key == 'Enter' ? inp.focus() : null));

function createTable(el, n) {
  //формируем массив с внутренностью строк таблицы
  const rows = [];
  for (let i = 0; i < n; i++){
    let cells = [];
    for (let j = 0; j < n; j++){
      cells[j] = `<td>${i + 1}:${j + 1}</td>`; 
    }
    rows[i] = `<tr>${cells.join('')}</tr>`;
  }
  el.innerHTML = `${el.innerHTML}
  <table border='1px solid'>${rows.join('')}</table>`;
}

function addButton(el, text) {
  el.innerHTML = `${el.innerHTML}
  <button>${text}</button>`;
}     

function addInputField (el, text) {
  el.innerHTML = `${el.innerHTML}
  <input type='text' value='${text}'></input>`;
} 

function renewInputValue (el, text) {
  el.value = text;
} 

function colorDiagonalCells(table, color) {
  for (row of table.rows)
    for(cell of row.cells)
        if(row.rowIndex == cell.cellIndex){
          cell.style.color = 'white';
          cell.style.backgroundColor = color;
        }
}
  
module.exports = {
  createTable,
  colorDiagonalCells,
  addButton,
  addInputField,
  renewInputValue
};