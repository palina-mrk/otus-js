/*
* @jest-environment jsdom
*/
const fs = require("fs");
const htmlData = fs.readFileSync("./index.html");
document.body.innerHTML = htmlData;

const  { 
  isRegexp,
  isDate,
  has31days,
  isLeap,
  isAddress,
  isTelephoneNumber,
  isCityCode,
  isMobyCode,
  askInput,
} = require('./script.js');

describe(`Checks the checking regexp function`, () => {
  it("isRegexp(str, regexp) is a function", () => {
    expect(calcSum).toBeInstanceOf(Function);
  });
});

describe(`Checks the first task point`, () => {
  
  
});

describe(`Checks the second task point`, () => {
  
});

describe(`Checks the third task point`, () => {

});

describe(`Checks the input function`, () => {  
  it("askInput(message) is a function", () => {
    expect(askInput).toBeInstanceOf(Function);
  });
  
  const messages = ["Hello, user!","input a number!",""];
  //начинаем тестировать askInput, которая работает с prompt
  //запоминаем исходный метод prompt
  const originalPrompt = window.prompt;    
  //проверяем вывод
  for (let i = 0; i < messages.length; i++){
    it(`calls prompt with ${messages[i]} to ask user input`, () => {
      //подменяем prompt функцией, у которой можно отследить,
      //какое значение ей было передано
      window.prompt = jest.fn();
      //вызываем askInput
      askInput(messages[i]);
      //проверяем, что prompt был вызван с сообщением messages[i]
      expect(window.prompt).toHaveBeenCalledWith(messages[i],"");
    });
  }
  //проверяем ввод
  for (let i = 0; i < messages.length; i++){
    it(`correctly reads ${messages[i]} from user input`, () => {
      //подменяем prompt функцией, возвращающей messages[i]
      window.prompt = jest.fn(() => messages[i]);
      //вызываем askInput, он должен вернуть messages[i] 
      expect(askInput("abc")).toBe(messages[i]);
    });
  }
  //восстанавливаем prompt в конце тестирования askInput
  window.prompt = originalPrompt;
});