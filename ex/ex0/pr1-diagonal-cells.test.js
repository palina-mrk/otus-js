/*
* @jest-environment jsdom
*/
const {createTable,
  colorDiagonalCells,
  addButton,
  addInputField,
  renewInputValue
} = require("./pr1-diagonal-cells.js");


describe("Environment", () => {
  it(`function createTable(el, n) 
    adds table n * n 
    to the end of element el`,() => {
    const el = document.body;
    const n = 5;
    createTable(el, n);
    const newTable = el.querySelectorAll('table')[el.querySelectorAll('table').length - 1];
    expect(newTable).not.toBe(null);
    expect(newTable.rows.length).toBe(n);
    for(newRow of newTable.rows)
      expect(newRow.cells.length).toBe(n);
  });
  it(`adds input field vith a given text`, () => {
    const el = document.body;
    const text = '   some text';
    addInputField(el,text);
    const newInput = el.querySelectorAll('input')[el.querySelectorAll('input').length - 1];
    expect(newInput).not.toBe(null);
    expect(newInput.type).toBe('text');
  //  console.log(newInput);
    expect(newInput.value).toBe(text);    
  })
  it(`adds button with given text`, () => {
    const el = document.body;
    const text = '   some text';
    addButton(el,text);
    const newButton = el.querySelectorAll('button')[el.querySelectorAll('button').length - 1];
    expect(newButton).not.toBe(null);
    expect(newButton.innerHTML).toBe(text);
  });
  it(`puts given text into the input value`, () => {
    const el = document.body;
    addInputField(el, 'first text');
    const newInput = el.querySelectorAll('input')[el.querySelectorAll('input').length - 1];
    renewInputValue(newInput, 'second text');
    expect(newInput.value).toBe('second text');    
  });
  it(`function colorDiagonalCells(table, color)
    colors diagonal cells of the table
    by the given color`, () => {
      const el = document.body;
      const n = 5;
      const color = 'red';
      createTable(el, n);
      const newTable = el.querySelectorAll('table')[el.querySelectorAll('table').length - 1];
      colorDiagonalCells(newTable,color);
    for(newRow of newTable.rows)
      for(newCell of newRow.cells)
        if(newRow.rowIndex == newCell.cellIndex)
          expect(newCell.style.backgroundColor).toBe(color);
        else
          expect(newCell.style.backgroundColor).toBe('');  
  });
});