/*
* @jest-environment jsdom
*/
const fs = require("fs");
const htmlData = fs.readFileSync("example-page.html");
console.log(data.toString());  
document.body.innerHTML = htmlData;

describe("Check environment", () => {
  it("it should contain 3 paragraphs", () => {
    const pExpect = 3;
    const pCount = document.querySelectorAll('p').length;
    expect(pCount).toBe(pExpect);
  });
  it("it should contain input", () => {
    const inputField = document.querySelector('input');
    expect(inputField ?? 10).toBe(inputField);
  });
  it("input should have type text", () => {
    const inputTypeExpect = 'text';
    const inputType = document.querySelector('input').getAttribute('type');
    expect(inputType).toBe(inputTypeExpect);
  });
});