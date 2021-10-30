const startBtn = document.querySelector("#start-btn");
const startPage = document.querySelector(".start-page");
function exitStartPage() {
  startBtn.addEventListener("click", () => {
    startPage.style.visibility = "hidden";
  });
}
exitStartPage();
