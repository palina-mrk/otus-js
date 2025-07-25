/*
* @jest-environment jsdom
*/
const fs = require("fs");
const htmlData = fs.readFileSync("./index.html");
document.body.innerHTML = htmlData;

const  { 
  InitialForm,
  createGlobalContainer,
  createHiddenButton,
  createInput,
  createParagraph,
  createTitle,
} = require('./script.js');

describe(`Checks the functions for creating page components`, () => {
  //div
  it("createGlobalContainer() is a function", () => {
    expect(createGlobalContainer).toBeInstanceOf(Function);
  });
  
  it(`creates an element 'div'`, () => {
    expect(createGlobalContainer().tagName).toBe('DIV');
    expect(createGlobalContainer()).toBeInstanceOf(HTMLDivElement);
  });

  //button
  it("createHiddenButton(message) is a function", () => {
    expect(createHiddenButton).toBeInstanceOf(Function);
  });
  
  it(`creates an element 'button'`, () => {
    expect(createHiddenButton().tagName).toBe('BUTTON');
    expect(createHiddenButton()).toBeInstanceOf(HTMLButtonElement);
  })  
  
  it(`the button is hidden`, () => {
    expect(createHiddenButton().hidden).toBe(true);
  })  
  
  it(`on button is writen the given message`, () => {
    expect(createHiddenButton('message').textContent).toBe('message');
  });

  //input
  it("createInput() is a function", () => {
    expect(createInput).toBeInstanceOf(Function);
  });
  
  it(`creates an empty input field`, () => {
    expect(createInput().tagName).toBe('INPUT');
    expect(createInput().value).toBe('');
    expect(createInput()).toBeInstanceOf(HTMLInputElement);
  })  

  //p
  it("createParagraph(text) is a function", () => {
    expect(createParagraph).toBeInstanceOf(Function);
  });
  
  it(`creates a paragraph with the given text`, () => {
    expect(createParagraph().tagName).toBe('P');
    expect(createParagraph()).toBeInstanceOf(HTMLParagraphElement);
    expect(createParagraph('message').innerText).toBe('message');
  })

  //h1..h6
  it("createTitle(n, message) is a function", () => {
    expect(createTitle).toBeInstanceOf(Function);
  });
  
  for(let i = 1; i <= 6; i++){
    it(`creates a title h${i} with the given text`, () => {
      expect(createTitle(i).tagName).toBe('H' + i);
      expect(createTitle(i)).toBeInstanceOf(HTMLHeadingElement);
      expect(createTitle(i,'someMsg').innerText).toBe('someMsg');
    })
  }
});

describe(`Checks the html-elements of InputForm`, () => {
  it("InitialForm() is a function", () => {
    expect(InitialForm).toBeInstanceOf(Function);
  });
  
  const testForm = new InitialForm();

  it(`contains one hidden button`, () => {
    expect(testForm.container.getElementsByTagName('button').length).toBe(1);
    expect(testForm.container.getElementsByTagName('button')[0]).toBe(testForm.button);
    expect(testForm.button.hidden).toBe(true);
  })

  it(`contains one empty input field`, () => {
    expect(testForm.container.getElementsByTagName('input').length).toBe(1);
    expect(testForm.container.getElementsByTagName('input')[0]).toBe(testForm.input);
    expect(testForm.input.value).toBe('');
  })

  it(`contains three non-empty paragraphs`, () => {
    expect(testForm.container.getElementsByTagName('p').length).toBe(3);
    for(let i = 0; i < 3; i++){
      expect(testForm.container.getElementsByTagName('p')[i]).toBe(testForm.paragraphs[i]);
      expect(testForm.paragraphs[i].innerText.trim().length > 0).toBe(true);
    }
  })

  it(`contains a title h4`, () => {
    expect(testForm.container.getElementsByTagName('h4').length).toBe(1);
    expect(testForm.container.getElementsByTagName('h4')[0]).toBe(testForm.title);
  })

  it(`all form elements are descendants of document.body 
    and of the class field .container`, () => {
    for(let key in testForm){
      if(key != 'paragraphs' && (typeof testForm[key]) != 'function'){
        expect(document.body.contains(testForm[key])).toBe(true);
        expect(testForm.container.contains(testForm[key])).toBe(true);
      }
    }
    for(let p of testForm.paragraphs){
      expect(document.body.contains(p)).toBe(true);
      expect(testForm.container.contains(p)).toBe(true);
    }
  })
});

/*
clearInput = ()
  this.removeFirstParagraph = ()
  this.getMessage = ()
  this.addParagraph = ()
  */
describe(`Checks the methods of InputForm`, () => {
  
  const testForm = new InitialForm();

  it("method clearInput() is a function", () => {
    expect(testForm.clearInput).toBeInstanceOf(Function);
  });
  it(`clears the input form and hides the button`, () => {
    testForm.input.value = 'some message';
    testForm.button.hidden = false;
    expect(testForm.input.value.length > 0).toBe(true);
    expect(testForm.button.hidden).toBe(false);

    testForm.clearInput();

    expect(testForm.input.value.length).toBe(0);
    expect(testForm.button.hidden).toBe(true);
  })


  it("method removeFirstParagraph() is a function", () => {
    expect(testForm.removeFirstParagraph).toBeInstanceOf(Function);
  });
  it(`clears the input form and hides the button`, () => {
    testForm.input.value = 'some message';
    testForm.button.hidden = false;
    expect(testForm.input.value.length > 0).toBe(true);
    expect(testForm.button.hidden).toBe(false);

    testForm.clearInput();

    expect(testForm.input.value.length).toBe(0);
    expect(testForm.button.hidden).toBe(true);
  })
});