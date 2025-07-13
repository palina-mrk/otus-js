/*
* @jest-environment jsdom
*/
const fs = require("fs");
const htmlData = fs.readFileSync("example-page.html");
document.body.innerHTML = htmlData;

const  { button,
  field,
  eventStarter,
  keyPress,
  changeButtonState,
  buttonClicked,
  removeFirstParagraph,
  addParagraph,
  clearField,
  hideButton,  
} = require('./script.js');

describe("Check start environment", () => {
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
  it("button should exist", () => {
    const button = document.querySelector('button');
    expect(button ?? 10).toBe(button);
  });
  it("button should be hidden", () => {
    const button = document.querySelector('button');
    expect(button.hidden).toBe(true);
  });
});

describe("Check functions", () => {
  let buttonIsHidden;
  let textInField;
  beforeEach(() => {
    buttonIsHidden = button.hidden;
    textInField = field.value;
  });  
  afterEach(() => {
    button.hidden = buttonIsHidden;
    field.value = textInField;
    document.body.innerHTML = htmlData;
  });  

  it("should hide button", () => {
    button.hidden = 'false';
    hideButton();
    expect(button.hidden).toBe(true); 
  });
  it("should clear input field", () => {
    field.value = "some text";
    clearField();
    expect(field.value).toBe(""); 
  });
  it("should add a paragraph with required text", () => {
    field.value = "some text";
    const pCountInitial = document.querySelectorAll('p').length;
    const paragraphs = [];
    for(let i = 0; i < pCountInitial; i++)
      paragraphs.push(document.querySelectorAll('p')[i].innerText);
    addParagraph();
    expect(document.querySelectorAll('p').length).toBe(pCountInitial + 1);
    for(let i = 0; i < pCountInitial; i++)
      expect(document.querySelectorAll('p')[i].innerText).toBe(paragraphs[i]);
    expect(document.querySelectorAll('p')[pCountInitial].innerText).toBe("some text");
  })
  it("should remove first paragraph", () => {
    const pCountInitial = document.querySelectorAll('p').length;
    const paragraphsFromSecond = [];
    for(let i = 1; i < pCountInitial; i++)
      paragraphsFromSecond.push(document.querySelectorAll('p')[i].innerText);
    removeFirstParagraph();
    expect(document.querySelectorAll('p').length).toBe(pCountInitial - 1);
    for(let i = 0; i < pCountInitial - 1; i++)
      expect(document.querySelectorAll('p')[i].innerText).toBe(paragraphsFromSecond[i]);
  })
  it("should show button, if text in the field", () => {
    field.value = "some text";
    changeButtonState();
    expect(button.hidden).toBe(false);
  })
  it("should hide button, if no text in the field", () => {
    field.value = "     ";
    changeButtonState();
    expect(button.hidden).toBe(true);
  })

  it(`should add a paragraph 
    and remove the first if more than 5
    after button click`, () => {
    let paragraphs = document.querySelectorAll('p');
    const pCount = paragraphs.length;
    field.value = "some text 4";
    button.click();
    paragraphs = document.querySelectorAll('p');
    expect(paragraphs[pCount].innerText).toBe("some text 4");
    field.value = "some text 5";
    button.click();
    paragraphs = document.querySelectorAll('p');
    expect(paragraphs[pCount + 1].innerText).toBe("some text 5");
    field.value = "some text 6";
    button.click();
    paragraphs = document.querySelectorAll('p');
    expect(paragraphs.length).toBe(5);
    expect(paragraphs[4].innerText).toBe("some text 6");
  })
});
