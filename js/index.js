const startBtn = document.querySelector("#start-btn");
const startPage = document.querySelector(".start-page");
const gamePage = document.querySelector(".game-page");
const scoreText = document.querySelector("#score div span");
const bill = document.querySelector(".bill");
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

// Saca numeros aleatorios entre 1-3 para billetes y 1-9 para id de posicion cloud
function getRandomNumber(max) {
  const res = Math.ceil(Math.random() * max);

  return res;
}

function getRandomPosition() {
  const randomPosition = `#bill${getRandomNumber(9)}`;
  const selectedPosition = document.querySelector(randomPosition);
  return selectedPosition;
}

function getRandomValue(randomCloud) {
  let randomValue = getRandomNumber(3);
  if (randomCloud.style.visibility === "hidden") {
    if (randomValue === 1) {
      randomCloud.style.backgroundImage = "url('/images/billete-100.jpg')";
      randomCloud.style.visibility = "visible";
      console.log("billete100");
      // randomCloud.addEventListener("click", () => {
      //   randomCloud.style.visibility = "hidden";
      //   score += 100;
      //   getScore(score);
      // });
      randomCloud.onclick = function () {
        randomCloud.style.visibility = "hidden";
        score += 100;
        getScore(score);
      };
    } else if (randomValue === 2) {
      randomCloud.style.backgroundImage = "url('/images/billete-200.jpg')";
      randomCloud.style.visibility = "visible";
      console.log("billete200");
      randomCloud.onclick = function () {
        randomCloud.style.visibility = "hidden";
        score += 200;
        getScore(score);
      };
    } else if (randomValue == 3) {
      randomCloud.style.backgroundImage = "url('/images/billete-500.jpg')";
      randomCloud.style.visibility = "visible";
      console.log("billete500");
      randomCloud.onclick = function () {
        randomCloud.style.visibility = "hidden";
        score += 500;
        getScore(score);
      };
    }
  }
}

function playGame() {
  let intervalId;
  let counter = 0;
  let expiredBill = null;
  intervalId = setInterval(() => {
    let cloudPosition = getRandomPosition();
    console.log(cloudPosition);
    let bill = getRandomValue(cloudPosition);
    counter++;
    if (!expiredBill) {
      // getPoints(bill, cloudPosition);
      expiredBill = cloudPosition;
    } else {
      expiredBill.style.visibility = "hidden";
      expiredBill = cloudPosition;
      // getPoints(bill, cloudPosition);
    }

    // let cloudPosition = getRandomPosition();
    // if (!expiredBill) {
    //   let billPoints = getRandomValue(cloudPosition);
    //   getPoints(billPoints, cloudPosition);
    //   expiredBill = cloudPosition;
    //   counter++;
    // } else {
    //   expiredBill.style.visibility = "hidden";
    //   let billPoints = getRandomValue(cloudPosition);
    //   getPoints(billPoints, cloudPosition);
    //   expiredBill = cloudPosition;
    //   counter++;
    // }
    if (counter === 15) {
      clearInterval(intervalId);
      expiredBill.style.visibility = "hidden";
    }
  }, 5000);
}
// function getPoints(billPoints, billPosition) {
//   // let points = 0;

//   billPosition.addEventListener(
//     "click",

//     () => {
//       if (billPosition.style.visibility === "visible") {
//         console.log(`im getting ${billPoints}points`);
//         billPosition.style.visibility = "hidden";
//         console.log(points);
//         points += billPoints;
//         getScore(points);
//       }
//     }
//   );

//Crearte una variable global;
//En el evento click de la nube, sumas el valor a la variable global
//en lugar de acceder al valor atraves de este return, lo coges directamente de la variable global
// missing return
// }

function getScore(points) {
  scoreArr.push(points);
  if (
    scoreArr.length - 1 === 500 && //<--- Esto tienes que mirartelo mejor
    scoreArr.length - 2 === 500 &&
    scoreArr.length - 3 === 500
  ) {
    // score += points;
    scoreText.innerText = points;
    instantLose();
  } else {
    console.log(`my score is ${points}`);
    scoreText.innerText = points;
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
