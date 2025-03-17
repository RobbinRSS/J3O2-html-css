// variables //
const arrGames = [];
const arrShoppingCart = [];
const overlay = document.querySelector(".overlay");
const hidden = document.querySelector(".hidden");
const popup = document.querySelector(".popup");
const gamePicker = document.getElementById("game-picker");
const popupContent = document.getElementById("popup-game-content");
///////

// fetch call to the json file //
fetch("./assets/games.json")
  .then((response) => response.json())
  .then((games) => {
    arrGames.push(...games);
    // console.log(arrGames);
    addPopupContent();
  })
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

// Check if game is 0 dollar //
const checkGamePrice = function (price) {
  if (!price) {
    return "FREE";
  } else {
    return `$${price}`;
  }
};
/////////

// add all the games to the html //
const addPopupContent = function () {
  arrGames.forEach((game, index) => {
    const html = `
    <div class="games-popup" data-game-index=${index}>
        <button class="round-button"></button>
        <span id="game-name">${
          game.title
        }<span id="game-price">${checkGamePrice(game.price)}</span></span>
    </div>`;
    popupContent.insertAdjacentHTML("beforeend", html);
  });
};
/////////

popupContent.addEventListener("click", function (e) {
  const clicked = e.target;
  console.log(clicked);
  const gamesPopup = clicked.closest(".games-popup");
  console.log(gamesPopup);
  const index = gamesPopup.getAttribute("data-game-index");
  console.log(index);
  arrShoppingCart.push(arrGames[index]);
  console.log(arrShoppingCart);
});
