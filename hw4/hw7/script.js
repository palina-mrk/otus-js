// создаём форму
let testForm;

document.querySelector('#task1').onclick = () => {
  document.querySelector('#task1').hidden = true;
  textForm = new InitialForm();
}

/*/ теперь добавляем обработчики событий
// фокусируемся на input
testForm.input.focus();
// показать кнопку, если появилось сообщение в input
// и скрыть, если исчезло
testForm.input.addEventListener("input", () => {
  testForm.button.hidden = !testForm.getMessage();
});

// добавить параграф по клику и убрать первый,
// если их больше 5
testForm.button.addEventListener('click', () => {
  testForm.addParagraph(testForm.getMessage());
  if(testForm.paragraphs.length > 5)
    testForm.removeFirstParagraph();
  testForm.clearInput();
  testForm.input.focus();
});
// сделать то же самое по нажатию Enter
testForm.input.addEventListener ('keydown',(event) => {
  if(event.key != 'Enter')
    return;
  testForm.addParagraph(testForm.getMessage());
  if(testForm.paragraphs.length > 5)
    testForm.removeFirstParagraph();
  testForm.clearInput();
});*/

function createGlobalContainer(){
  const newContainer = document.createElement('div');
//  newContainer.className = className;
//  document.body.append(newContainer);
  return newContainer;
}

function createTitle (n, message){
  const newTitle = document.createElement('h'+ n);
  newTitle.innerText = message;
  //newTitle.className = className;
  return newTitle;
}

//создает параграф с сообщением message
function createParagraph(message){
  const nextParagraph = document.createElement('p');
  nextParagraph.innerText = message;
//  nextParagraph.className = className;
//  parent.append(nextParagraph);
  return nextParagraph;
}

function createInput(){
  const newInput = document.createElement('input');
//  newInput.className = className;
//  parent.append(newInput);
  return newInput;
}

function createHiddenButton(message){
  const newButton = document.createElement('button');
//  newButton.className = className;
  newButton.textContent = message;
  newButton.hidden = true;
//  parent.append(newButton);
  return newButton;
}

/*
function addInitialForm(){
  const container = createGlobalContainer('test-container');
  const title = createTitle(4, 'test-section', 'Testing paragraphs');
  container.append(title);
  const paragraphs = [];
  for(let i = 0; i < 3; i++){
    paragraphs[i] = createParagraph('writing-paragraph',`paragraph number ${i + 1}`);
    container.append(paragraphs[i]);
  }
  const input = createInput('input-field');
  const emptyParagraph = createParagraph('empty-paragraph','');
  const button = createButton( 'button','add a paragraph');
  
  container.append(input);
  container.append(emptyParagraph);
  container.append(button);
  document.body.append(container);

  return {
    container,
    title,
    paragraphs,
    input,
    emptyParagraph,
    button,
    addParagraph (message) {
      paragraphs.push(createParagraph('writing-paragraph',message));
    },
    removeFirstParagraph () {
      if(paragraphs.length > 0) {
        paragraphs.shift().remove();
      }
    },
    getMessage() {
      const message = input.value.trim();
      return (message?.length ? message : null);
    },
  };
}
*/

function InitialForm(){
  const container = createGlobalContainer();
  const title = createTitle(4, 'Testing paragraphs');
  container.append(title);

  const paragraphs = [];
  for(let i = 0; i < 3; i++){
    paragraphs[i] = createParagraph(`paragraph number ${i + 1}`);
    container.append(paragraphs[i]);
  }
  const input = createInput();
  const emptyParagraph = createParagraph('');
  const button = createHiddenButton('add a paragraph');
  
  container.append(input);
  container.append(emptyParagraph);
  container.append(button);
  document.body.append(container);

  // поля:
  this.container = container;
  this.title = title;
  this.paragraphs = paragraphs;
  this.input = input;
  this.emptyParagraph = emptyParagraph;
  this.button = button;

  // добавляем методы
  this.clearInput = () => {
    this.input.value = '';
    this.button.hidden = true;
  };
  this.removeFirstParagraph = () => {
    if(this.paragraphs.length > 0) {
      const delP = this.paragraphs[0];
      this.paragraphs.shift();
      delP.remove();
    }
  };
  this.getMessage = () => {
    const message = this.input.value.trim();
    return (message?.length ? message : null);
  };
  this.addParagraph = () => {
    const newP = createParagraph(this.getMessage());
    this.paragraphs.push(newP);
    this.input.before(newP);
  };

  // теперь добавляем обработчики событий
  // фокусируемся на input
  this.input.focus();
  // показать кнопку, если появилось сообщение в input
  // и скрыть, если исчезло
  this.input.addEventListener("input", () => {
    this.button.hidden = !this.getMessage();
  });

  // добавить параграф по клику и убрать первый,
  // если их больше 5
  this.button.addEventListener('click', () => {
    this.addParagraph(this.getMessage());
    if(this.paragraphs.length > 5)
      this.removeFirstParagraph();
    this.clearInput();
    this.input.focus();
  });
  // сделать то же самое по нажатию Enter
  this.input.addEventListener ('keydown',(event) => {
    if(event.key != 'Enter')
      return;
    this.addParagraph(this.getMessage());
    if(this.paragraphs.length > 5)
      this.removeFirstParagraph();
    this.clearInput();
  });
};


module.exports = {
  InitialForm,
  createGlobalContainer,
  createHiddenButton,
  createInput,
  createParagraph,
  createTitle,
};