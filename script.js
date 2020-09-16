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
let timeLimit = 200000;

function pickRandomHole(holes) {
  const randomHole = Math.floor(Math.random() * holes.length);
  // console.log(`Fired with time: ${randomHole}`);
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
  // console.log(`Fired with PopOut time: ${time}`);
  const hole = pickRandomHole(holes);
  console.log(hole);

  hole.classList.add("up");
  setTimeout(function() {
    hole.classList.remove("up");
    if (!timeUp) {
      // console.log(`Time Up is false!`);
      popOut();
    }
  }, time);
}

window.onload = startGame();

// Step 3 dynamically change text content to countdown
function startGame() {
  countdown = timeLimit / 2000;
  scoreBoard.textContent = 0;
  scoreBoard.style.display = "block";
  countdownBoard.textContent = countdown;
  timeUp = false;
  score = 0;
  popOut();

  setTimeout(function() {
    timeUp = true;
  }, timeLimit);

  let startCountdown = setInterval(function() {
    countdown -= 1;
    countdownBoard.textContent = countdown;
    if (countdown <= 0) {
      countdown = 0;
      clearInterval(startCountdown);
      countdownBoard.textContent =
        "Time is up!! Thank you for protecting our planet. This is the way!";
      return;
    }
  }, 1000);
}

// Step 4 adding event listeners
startButton.addEventListener("click", startGame);
function whack(e) {
  score++;
  this.style.backgroundImage = 'url("yoda2.png")';
  this.style.pointerEvents = "none";

  setTimeout(() => {
    this.style.backgroundImage = 'url("yoda1.png")';
    this.style.pointerEvents = "all";
  }, 800);

  scoreBoard.textContent = score;
}

// Step 5 keep track of score with forEach
if () {
  moles.forEach(mole => mole.addEventListener("click", whack));
}
