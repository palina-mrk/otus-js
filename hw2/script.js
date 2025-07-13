const button = document.querySelector('.button');
const field  = document.querySelector('.input-field');

eventStarter();

function eventStarter(){
  field.focus();
  field.addEventListener('keydown',keyPress);
 // field.addEventListener('keyup',  keyPress);
  field.oninput = changeButtonState;
  button.addEventListener('click', buttonClicked);
}

function keyPress(event){
  if((event.key == "Enter") && (field.value.length != 0))
    buttonClicked();
  else
    changeButtonState();
}

function changeButtonState(){
  button.hidden = (field.value.trim().length == 0);
}

function buttonClicked(){
  const list = document.querySelectorAll('.text-paragraph');
  if(list.length == 5)
    removeFirstParagraph();

  addParagraph();
  clearField();
  hideButton();
}

function removeFirstParagraph(){
  el = document.querySelector('.text-paragraph');
  el.remove();
}

function addParagraph(){
  const nextParagraph = document.createElement('p');
  nextParagraph.innerText = field.value;
  nextParagraph.classList.value = 'text-paragraph';
  const form = document.querySelector(".list");
  form.append(nextParagraph);
}

function clearField(){
  field.value = "";
}

function hideButton(){
  button.hidden = true;
}

module.exports = {
  button,
  field,
  eventStarter,
  keyPress,
  changeButtonState,
  buttonClicked,
  removeFirstParagraph,
  addParagraph,
  clearField,
  hideButton,  
};
