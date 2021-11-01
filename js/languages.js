const gameInstructions = {
  title: {
    es: "LLuvia de dinero",
    en: "Money rain",
  },
  description: {
    es: "aaaaaaaa",
    en: "bbbbbbbb",
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
