const gameInstructions = {
  title: {
    es: "LLuvia de dinero",
    en: "Money rain",
  },
  description: {
    es: "Quien dijo que el dinero no cae del cielo? En este juego la lluvia cae en forma de billetes de 100€, 200€ y 500€. Recoge tantos billetes como puedas y pasa los 3 niveles para hacerte rico. Por cada nivel aumentará el mínimo de dinero a recoger y la velocidad. Intenta llenar tu cartera al máximo, pero ten cuidado, porque la avaricia rompe el saco.",
    en: " Who said that money does not fall from the sky? In this game the rain falls in the form of 100€, 200€ and 500€ bills. Collect as many bills as you can and pass the 3 levels to get rich. For each level, the minimum amount of money to collect and the speed will increase. Try to fill your wallet to the maximum, but be careful, because greed breaks the sack.",
  },
};
const languageBtn = document.querySelector(".language-btn");
let instructionsText = document.querySelector(".start-page-text");
instructionsText.innerText = gameInstructions.description.en;
languageBtn.innerText = "Español";

languageBtn.addEventListener("click", () => {
  if (languageBtn.innerText === "Español") {
    languageBtn.innerText = "English";
    instructionsText.innerText = gameInstructions.description.es;
  } else if (languageBtn.innerText === "English") {
    languageBtn.innerText = "Español";
    instructionsText.innerText = gameInstructions.description.en;
  }
});
