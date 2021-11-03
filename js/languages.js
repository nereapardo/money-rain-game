const gameInstructions = {
  description: {
    es: "Quien dijo que el dinero no cae del cielo? En este juego la lluvia cae en forma de billetes de 100€, 200€ y 500€. Recoge tantos billetes como puedas y pasa los 3 niveles para hacerte rico. Por cada nivel aumentará el mínimo de dinero a recoger y la velocidad. Intenta llenar tu cartera al máximo, pero ten cuidado, porque la avaricia rompe el saco.",
    en: " Who said that money does not fall from the sky? In this game the rain falls in the form of 100€, 200€ and 500€ bills. Collect as many bills as you can and pass the 3 levels to get rich. For each level, the minimum amount of money to collect and the speed will increase. Try to fill your wallet to the maximum, but be careful, because greed breaks the sack.",
  },
  easterEeg: {
    es: "Has perdido! Ya te advertí que la codicia rompe el saco. Cada vez que coges 3 billetes de 500€ pierdes, por lo que no seas avaricioso y déjalo caer.",
    en: "You have lost! I already warned you that greed breaks the sack. Every time you take 3 bills of 500€ you lose, so don't be greedy and drop it.",
  },
};
const languageBtnStartPage = document.querySelector(".language-btn-start-page");
const languageBtnEasterEgg = document.querySelector(".language-btn-easter-egg");
let instructionsText = document.querySelector(".start-page-text");
let easterEegText = document.querySelector(".easter-egg p");
languageBtnStartPage.innerText = "ESPAÑOL";
languageBtnEasterEgg.innerText = "ESPAÑOL";
instructionsText.innerText = gameInstructions.description.en;
easterEegText.innerText = gameInstructions.easterEeg.en;
languageBtnStartPage.innerText = "ESPAÑOL";
languageBtnEasterEgg.innerText = "ESPAÑOL";

languageBtnStartPage.addEventListener("click", () => {
  if (languageBtnStartPage.innerText === "ESPAÑOL") {
    languageBtnStartPage.innerText = "ENGLISH";
    instructionsText.innerText = gameInstructions.description.es;
  } else if (languageBtnStartPage.innerText === "ENGLISH") {
    languageBtnStartPage.innerText = "ESPAÑOL";
    instructionsText.innerText = gameInstructions.description.en;
  }
});

languageBtnEasterEgg.addEventListener("click", () => {
  if (languageBtnEasterEgg.innerText === "ESPAÑOL") {
    languageBtnEasterEgg.innerText = "ENGLISH";
    easterEegText.innerText = gameInstructions.easterEeg.es;
  } else if (languageBtnEasterEgg.innerText === "ENGLISH") {
    languageBtnEasterEgg.innerText = "ESPAÑOL";
    easterEegText.innerText = gameInstructions.easterEeg.en;
  }
});
