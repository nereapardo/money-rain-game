const startBtn = document.querySelector("#start-btn");
const startPage = document.querySelector(".start-page");
const gamePage = document.querySelector(".game-page");
const scoreText = document.querySelector("#score div span");
const bill = document.querySelector(".bill");
let scoreArr = [];
let points = 0;
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

function getRandomPosition(lastPosition) {
  const randomValue = getRandomNumber(9);
  while (randomValue === lastPosition) {
    randomValue = getRandomNumber(9);
  }
  const randomPosition = `#bill${randomValue}`;
  const selectedPosition = document.querySelector(randomPosition);
  return selectedPosition;
}

function getRandomValue(randomCloud) {
  let randomValue = getRandomNumber(6);
  // if (randomCloud.style.visibility == "hidden") {
  if (randomValue <= 3) {
    randomCloud.style.backgroundImage = "url('/images/billete-100.jpg')";
    randomCloud.style.visibility = "visible";
    const points = 100;
    console.log("billete100");
    return points;
  } else if (randomValue <= 5 && randomValue > 3) {
    randomCloud.style.backgroundImage = "url('/images/billete-200.jpg')";
    randomCloud.style.visibility = "visible";
    const points = 200;
    console.log("billete200");
    return points;
  } else if (randomValue == 6) {
    randomCloud.style.backgroundImage = "url('/images/billete-500.jpg')";
    randomCloud.style.visibility = "visible";
    const points = 500;
    console.log("billete500");
    return points;
    // } console.log() para saber que billete estas pasando y comparar con la puntuacion que estás obteniendo a ver si coinciden
  }
}

function playGame() {
  let intervalId;
  let counter = 0;
  let expiredBill = null;
  intervalId = setInterval(() => {
    let cloudPosition = getRandomPosition(expiredBill);
    let bill = getRandomValue(cloudPosition);
    counter++;
    if (!expiredBill) {
      getPoints(bill, cloudPosition);
      expiredBill = cloudPosition;
    } else {
      expiredBill.style.visibility = "hidden";
      expiredBill = cloudPosition;
      getPoints(bill, cloudPosition);
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
function getPoints(billPoints, billPosition) {
  // let points = 0;

  billPosition.addEventListener(
    "click",

    () => {
      if (billPosition.style.visibility === "visible") {
        console.log(`im getting ${billPoints}points`);
        billPosition.style.visibility = "hidden";
        console.log(points);
        points += billPoints;
        getScore(points);
      }
    }
  );

  //Crearte una variable global;
  //En el evento click de la nube, sumas el valor a la variable global
  //en lugar de acceder al valor atraves de este return, lo coges directamente de la variable global
  // missing return
}

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
