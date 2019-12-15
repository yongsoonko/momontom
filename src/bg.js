const body = document.body,
  NUMBER_OF_IMG = 6;

function genRandomNumber() {
  return Math.ceil(Math.random() * NUMBER_OF_IMG);
}
function paintImage(fileName) {
  let image = new Image();
  image.src = `img/${fileName}.jpg`;
  image.classList.add('bgImage');
  body.prepend(image);
}

function init() {
  const number = genRandomNumber();
  paintImage(number);
}

init();