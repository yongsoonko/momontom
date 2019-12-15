const COORDS = 'coords',
  API_KEY = 'aea7405c67eeedbd1cf3703826a962c9',
  weather = document.querySelector('.js-weather'),
  weatherIcon = document.querySelector('.js-weatherIcon');

function saveCoords(coords) {
  localStorage.setItem(COORDS, JSON.stringify(coords));
}

function loadCoords() {
  return JSON.parse(localStorage.getItem(COORDS));
}

function handleGeoSuccess(position) {
  let coords = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
  saveCoords(coords);
  getWeather(coords.latitude, coords.longitude);
}

function handleGeoFailure() {}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(
    handleGeoSuccess,
    handleGeoFailure
  );
}

function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
    .then(function(res) {
      return res.json();
    }).then(function(json) {
      const temp = json.main.temp,
        place = json.name,
        icon = json.weather[0].icon;
      weather.innerText = `${temp}℃ @ ${place}`;
      weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
    });
}

function printWeather() {
  const coords = loadCoords(); 
  if(coords === null) {
    askForCoords();
  } else {
    getWeather(coords.latitude, coords.longitude);
  }
}

function init() {
  printWeather();
}

init();