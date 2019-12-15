const TODOS_LS = 'toDos',
  toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input[type="text"]'),
  toDoList = document.querySelector('.js-toDoList');
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function loadToDos() {
  const loadedToDos = JSON.parse(localStorage.getItem(TODOS_LS));
  return loadedToDos !== null ? loadedToDos : []; 
}

function handleDelBtn(e) {
  const targetList = e.target.parentNode,
    targetId = +targetList.id;
  toDos = toDos.filter(item => item.id !== targetId);
  console.dir(toDos);
  saveToDos();
  removeToDo(targetList);
}

function removeToDo(targetNode) {
  targetNode.parentNode.removeChild(targetNode);
}

function printToDo(toDo) {
  const newLi = document.createElement('li'),
    delBtn = document.createElement('button');
  [newLi.id, newLi.innerText] = [toDo.id, toDo.thing];
  delBtn.innerText = '✔';
  delBtn.addEventListener('click', handleDelBtn);
  newLi.prepend(delBtn);
  toDoList.appendChild(newLi);
}

function printToDos() {
  toDos = loadToDos();
  if(toDos === null) return;
  toDos.forEach(toDo => printToDo(toDo));
}

function genNewId() {
  return toDos.length === 0 ? 0 : toDos[toDos.length - 1].id + 1;
}

function handletoDoForm(e) {
  const thing = toDoInput.value,
    newToDo = {
      id: genNewId(),
      thing,
    }
  toDos.push(newToDo);
  saveToDos();
  e.preventDefault();
  toDoInput.value = "";
  printToDo(newToDo);  //printToDos (X)
}

function init() {
  printToDos();
  toDoForm.addEventListener('submit', handletoDoForm);
}

init();