const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startButton: document.querySelector('[data-action="start"]'),
  stopButton: document.querySelector('[data-action="stop"]'),
};

let intervalId = null;
let counterActive = false;

refs.startButton.addEventListener('click', onStartButtonClick);
refs.stopButton.addEventListener('click', onStopButtonClick);

function onStartButtonClick() {
  if (counterActive) {
    return;
  }
  counterActive = true;
  intervalId = setInterval(switchColor, 1000);
  disableStartButton();
}

function onStopButtonClick() {
  clearInterval(intervalId);
  counterActive = false;
  disableStartButton();
}

function disableStartButton() {
  refs.startButton.disabled = counterActive;
}

function switchColor() {
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
};