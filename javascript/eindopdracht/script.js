// variables //
const arrGames = [];
const overlay = document.querySelector(".overlay");
const hidden = document.querySelector(".hidden");
const popup = document.querySelector(".popup");
const gamePicker = document.getElementById("game-picker");
///////

// fetch call to the json file //
fetch("./assets/games.json")
  .then((response) => response.json())
  .then((games) => arrGames.push(games))
  .catch((error) => console.error("Fout bij laden JSON:", error));
//

// Popup functions //
const openPopup = function () {
  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closePopup = function () {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
};

gamePicker.addEventListener("click", () => openPopup());
overlay.addEventListener("click", () => closePopup());

document.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.key === "Escape" && !popup.classList.contains("hidden")) {
    closePopup();
  }
});
////////
