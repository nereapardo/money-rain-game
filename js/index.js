const startBtn = document.querySelector("#start-btn");
const startPage = document.querySelector(".start-page");
const gamePage = document.querySelector(".game-page");
const scoreText = document.querySelector("#score div span");
let scoreArr = [];
let score = 0;
let countdownFinished = false;

// FUNCTIONS
function startGame() {
  let counter = 5;
  let countdownNumber = document.createElement("h1");
  countdownNumber.id = "countdown";
  gamePage.appendChild(countdownNumber);
  const countdown = setInterval(() => {
    countdownNumber.innerText = `${counter}`;
    counter--;
    if (counter < -1) {
      clearInterval(countdown);
      countdownNumber.remove();
      playGame();
    }
  }, 1000);
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function getRandomPosition() {
  const randomPosition = `#bill${getRandomNumber(9)}`;
  const selectedPosition = document.querySelector(randomPosition);
  return selectedPosition;
  console.log(getRandomPosition);
}

function getRandomValue(randomCloud) {
  console.log("111111");
  // if (randomCloud.style.visibility == "hidden") {
  let randomValue = getRandomNumber(6);
  console.log("22222", randomValue);
  if (randomValue <= 3) {
    console.log("aaaaa");
    randomCloud.style.backgroundImage = "url('/images/billete-100.jpg')";
    randomCloud.style.visibility = "visible";
    const points = 100;
    return points;
  } else if (randomValue <= 5) {
    console.log("bbbbbb");
    randomCloud.style.backgroundImage = "url('/images/billete-200.jpg')";
    randomCloud.style.visibility = "visible";
    const points = 200;
    return points;
  } else if (randomValue == 6) {
    console.log("cccccc");
    randomCloud.style.backgroundImage = "url('/images/billete-500.jpg')";
    randomCloud.style.visibility = "visible";
    const points = 500;
    return points;
    // }
  }
}

function playGame() {
  let intervalId;
  let counter = 0;
  let expiredBill = null;
  intervalId = setInterval(() => {
    let cloudPosition = getRandomPosition();
    if (!expiredBill) {
      getRandomValue(cloudPosition);
      expiredBill = cloudPosition;
      counter++;
    } else {
      expiredBill.style.visibility = "hidden";
      getRandomValue(cloudPosition);
      expiredBill = cloudPosition;
      counter++;
    }

    if (counter === 20) {
      clearInterval(intervalId);
      expiredBill.style.visibility = "hidden";
    }
  }, 1500);
}

function getScore(randomBill) {
  // tengo que cambiar esto, no recibe la callback de posicion random si no de  cuando clico sobre un billete (eventlistener)
  scoreArr.push(randomBill);
  if (
    scoreArr.length - 1 === 500 &&
    scoreArr.length - 2 === 500 &&
    scoreArr.length - 3 === 500
  ) {
    score += randomBill;
    scoreText.innerText = score;
    instantLose();
  } else {
    score += randomBill;
    scoreText.innerText = score;
  }
}
function instantLose() {
  // logica para perder por coger 3 de 500€
}

window.addEventListener("load", () => {
  startBtn.addEventListener("click", () => {
    startPage.style.visibility = "hidden";
    startGame();
  });
});
