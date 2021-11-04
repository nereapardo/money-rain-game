const startBtn = document.querySelector(".start-btn");
const startPage = document.querySelector(".start-page");
const gamePage = document.querySelector(".game-page");
const scoreText = document.querySelector("#score div span");
const bill = document.querySelector(".bill");
const popUp = document.querySelector(".popUp");
const popUpText = document.querySelector(".popUp h1");
const endLevelBtn = document.querySelector("#endLevelBtn");
const nextLevelBtn = document.querySelector("#nextLevel");
const easterEgg = document.querySelector(".easter-egg");
const easterEegBtn = document.querySelector("#easter-egg-play-again");
let intervalId;
let score = 0;
let counter = 0;
let lastBill = 0;
let lastBillCounter = 0;
let countdownFinished = false;
let audio = false;
const levels = {
  1: {
    name: "LEVEL 1",
    minScore: 2000,
    speed: 2000,
  },
  2: {
    name: "LEVEL 2",
    minScore: 2300,
    speed: 1500,
  },
  3: {
    name: "LEVEL 3",
    minScore: 2700,
    speed: 1000,
  },
};
let level = 1;
// FUNCTIONS
function startGame() {
  getScore(score, level);
  let countDownCounter = 4;
  let levelName = levels[level].name;
  let countdownNumber = document.createElement("h1");
  countdownNumber.id = "countdown";
  gamePage.appendChild(countdownNumber);
  const countdown = setInterval(() => {
    if (countDownCounter === 4) {
      countdownNumber.innerText = `${levelName}`;
      countDownCounter--;
    } else {
      countdownNumber.innerText = `${countDownCounter}`;
      countDownCounter--;
    }
    if (countDownCounter < -1) {
      clearInterval(countdown);
      countdownNumber.remove();
      playGame();
    }
  }, 1000);
}

function getRandomNumber(max) {
  const res = Math.ceil(Math.random() * max);

  return res;
}

function getRandomPosition() {
  const randomPosition = `#bill${getRandomNumber(9)}`;
  const selectedPosition = document.querySelector(randomPosition);
  return selectedPosition;
}

function getRandomValue(randomCloud, level) {
  let randomValue = getRandomNumber(3);
  if (randomCloud.style.visibility === "hidden") {
    if (randomValue === 1) {
      randomCloud.style.backgroundImage = "url('images/billete-100.jpg')";
      randomCloud.style.visibility = "visible";

      console.log("billete100");
      randomCloud.onclick = function () {
        randomCloud.style.visibility = "hidden";
        score += 100;
        lastBill = 100;
        lastBillCounter = 0;
        getScore(score, level);
      };
    } else if (randomValue === 2) {
      randomCloud.style.backgroundImage = "url('images/billete-100.jpg')";
      randomCloud.style.visibility = "visible";

      console.log("billete200");
      randomCloud.onclick = function () {
        randomCloud.style.visibility = "hidden";
        score += 200;
        lastBill = 200;
        lastBillCounter = 0;
        getScore(score, level);
      };
    } else if (randomValue == 3) {
      randomCloud.style.backgroundImage = "url('images/billete-500.jpg')";
      randomCloud.style.visibility = "visible";

      console.log("billete500");
      randomCloud.onclick = function () {
        randomCloud.style.visibility = "hidden";
        score += 500;
        if (lastBill === 500) {
          lastBillCounter++;
        } else {
          lastBillCounter = 1;
        }
        lastBill = 500;

        instantLose();
        getScore(score, level);
      };
    }
  }
}

function playGame() {
  score = 0;
  counter = 0;
  let expiredBill = null;
  intervalId = setInterval(() => {
    let cloudPosition = getRandomPosition();
    getRandomValue(cloudPosition, level);
    counter++;
    if (!expiredBill) {
      expiredBill = cloudPosition;
    } else {
      if (expiredBill == cloudPosition) {
        // expiredBill = cloudPosition;
        return;
      }
      expiredBill.style.visibility = "hidden";
      expiredBill = cloudPosition;
    }
    if (counter >= 9) {
      console.log("my score is", score);
      clearInterval(intervalId);
      expiredBill.style.visibility = "hidden";
      if (score < levels[level].minScore) {
        level++;
        popUp.style.visibility = "visible";
        endLevelBtn.className = `playAgain`;
        endLevelBtn.innerText = "PLAY AGAIN";
        popUpText.innerText = `GAME OVER`;
        const playAgainBtn = document.querySelector(".playAgain");
        playAgainBtn.onclick = function () {
          window.location.reload();
        };
      } else {
        if (level < 3) {
          console.log("ganaste primer nivel");
          level++;
          popUp.style.visibility = "visible";
          endLevelBtn.className = `level${level}`;
          endLevelBtn.innerText = "PLAY";
          popUpText.innerText = `LEVEL ${level}`;
          const level2Btn = document.querySelector(`.level${level}`);
          level2Btn.onclick = function () {
            popUp.style.visibility = "hidden";
            score = 0;
            counter = 0;
            getScore(score, level);
            startGame();
          };
        } else {
          score = 0;
          popUp.style.visibility = "visible";
          popUpText.innerText = `CONGRATULATIONS YOU WON!`;
          endLevelBtn.className = "playAgain";
          endLevelBtn.innerText = "PLAY AGAIN";
          const playAgainBtn = document.querySelector(".playAgain");
          playAgainBtn.onclick = function () {
            window.location.reload();
          };
        }
      }
    }
  }, levels[level].speed);
  console.log(`mi final score is`, score);
  return score;
}

function getScore(points, level) {
  console.log(`my score is ${points}`);
  scoreText.innerText = `${points}/${levels[level].minScore}`;
}
function instantLose() {
  if (lastBillCounter === 3) {
    console.log("looooser!");
    clearInterval(intervalId);
    easterEgg.style.visibility = "visible";
    easterEegBtn.innerText = "PLAY AGAIN";
    easterEegBtn.onclick = function () {
      easterEgg.style.visibility = "visible";
      window.location.reload();
    };
  }
}
// const loadAudio = () => {
//   const sound = new Audio("audio/it_s_raining.mp3");
//   sound.preload = "auto";
//   sound.load();
//   audio = sound;
};
// audio not working
window.addEventListener("load", () => {
  // document.getElementById("player").play();
  // loadAudio();
  // audio.play();
  startBtn.addEventListener("click", () => {
    startPage.style.visibility = "hidden";
    startGame();
  });

  // playGame.onclick();
});
