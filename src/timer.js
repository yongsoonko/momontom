const calDate = document.querySelector('.js-calDate'),
  calYear = document.querySelector('.js-calYear'),
  time = document.querySelector('.js-time'),
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function gen2Digit(num) {
  return num < 10 ? '0' + num : num;
}
  
function printTime() {
  setInterval(() => {
    const current = new Date(),
      year = current.getFullYear(),
      month = current.getMonth() + 1,
      date = current.getDate(),
      day = days[current.getDay()], 
      hours = gen2Digit(current.getHours()),
      minutes = gen2Digit(current.getMinutes()),
      seconds = gen2Digit(current.getSeconds());
      
    calDate.innerText = `${date} (${day}),`;
    if(day === 'Sun') calDate.classList.add('sunday');
    else calDate.classList.remove('sunday');
    calYear.innerText = `${year}/${month}`
    time.innerText = `${hours} : ${minutes} : ${seconds}`;
  }, 1000);
}

function init() {
  printTime();  
}

init();