// Step 1 select objects on screen & define globals
const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
const countdownBoard = document.querySelector(".countdown");
const startButton = document.querySelector(".startButton");

let lastHole;
let timeUp = false;
let score = 0;
let countdown;

function pickRandomHole(holes) {
  const randomHole = Math.floor(Math.random() * holes.length);
  const hole = holes[randomHole];

  if (hole === lastHole) {
    return pickRandomHole(holes);
  }
  lastHole = hole;
  return hole;
}

// Step 2 add class 'up'
function popOut() {
  const time = Math.random() * 1300 + 400;
  const hole = pickRandomHole(holes);

  hole.classList.add("up");
  setTimeout(function() {
    hole.classList.remove("up");
    if (!timeUp) {
      popOut();
    }
  }, time);
}

// Step 3 dynamically change text content to countdown
function startGame() {
  countdown = timeLimit / 20;
  scoreBoard.textContent = 0;
  scoreBoard.style.display = "block";
  countdownBoard.textContent = countdown;
  timeUp = false;
  score = 0;
  popOut();

  setTimeout(function() {
    timeUp = true;
  }, timeLimit);

  let startCountdown = setInterval();
}

// Step 4 adding event listeners

// Step 5 keep track of score with forEach
