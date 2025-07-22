const testForm = addInitialForm();

testForm.button.onclick = () => {

}

function createGlobalContainer(className){
  const newContainer = document.createElement('div');
  newContainer.className = className;
//  document.body.append(newContainer);
  return newContainer;
}

function createTitle (n, className, message){
  const newTitle = document.createElement('h'+ n);
  newTitle.innerText = message;
  newTitle.className = className;
  return newTitle;
}

//добавляет параграф с классом className и сообщением message
//  в элемент parent
function createParagraph(className, message){
  const nextParagraph = document.createElement('p');
  nextParagraph.innerText = message;
  nextParagraph.className = className;
//  parent.append(nextParagraph);
  return nextParagraph;
}

function createInput(className){
  const newInput = document.createElement('input');
  newInput.className = className;
//  parent.append(newInput);
  return newInput;
}

function createButton(className, message){
  const newButton = document.createElement('button');
  newButton.className = className;
  newButton.textContent = message;
//  parent.append(newButton);
  return newButton;
}

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
    readInput() {
      
    }
  };
}


module.exports = {
  calcSum,
  calcComposition,
  calcSymbolsCount,    
  askInput,
  calcDigitsSum
};