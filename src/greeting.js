const nameForm = document.querySelector('.js-nameForm'),
  nameInput = nameForm.querySelector('input[type="text"]'),
  greeting = document.querySelector('.js-greeting'),
  name = document.querySelector('.js-name'),
  USER_NAME = 'user_name';

function saveUserName(userName) {
  localStorage.setItem(USER_NAME, JSON.stringify(userName));
}

function loadUserName() {
  return JSON.parse(localStorage.getItem(USER_NAME));
}
  
function printGreeting() {
  const userName =  loadUserName();
  if(userName === null) {
    nameForm.classList.remove('invisible');
    greeting.classList.add('invisible');
  } else {
    name.innerText = userName;
    nameForm.classList.add('invisible');
    greeting.classList.remove('invisible');
    nameInput.removeAttribute("autofocus");
    document.querySelector('.js-toDoForm input[type="text"]').focus();
  }
}

function handleNameForm(e) {
  const userName = nameForm.querySelector('input[type="text"]').value;
  saveUserName(userName);
  printGreeting();
  e.preventDefault();
}
  
function init() {
  printGreeting();
  nameForm.addEventListener('submit', handleNameForm);
}

init();