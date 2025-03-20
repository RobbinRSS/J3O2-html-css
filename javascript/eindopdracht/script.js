// variables //
const arrGames = [];
const arrShoppingCart = [];
const overlay = document.querySelector(".overlay");
const hidden = document.querySelector(".hidden");
const popup = document.querySelector(".popup");
const shoppingCart = document.querySelector(".shopping-cart");
const gamePicker = document.getElementById("game-picker");
const popupContent = document.getElementById("popup-game-content");
const openShoppingCart = document.getElementById("open-shopping-cart");
const contentCart = document.getElementById("shopping-cart-content");
const priceContainer = document.getElementById("total-price");
///////

// fetch call to the json file //
fetch("./assets/games.json")
  .then((response) => response.json())
  .then((games) => {
    arrGames.push(...games);
    addContentContainer(arrGames, popupContent);
  })
  .catch((error) => console.error("Fout bij laden JSON:", error));
//

// Popup functions //
const openPopup = function (el) {
  el.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closePopup = function (el) {
  el.classList.add("hidden");
  overlay.classList.add("hidden");
};

gamePicker.addEventListener("click", () => openPopup(popup));
overlay.addEventListener("click", () => {
  closePopup(popup);
  closePopup(shoppingCart);
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

// add content to container //
const addContentContainer = function (arr, el) {
  el.innerHTML = "";

  arr.forEach((game) => {
    const isSelected = selectedGameTitles.has(game.title);

    const html = `
        <div class="games-popup ${
          isSelected ? "selected" : ""
        }" data-game-title="${game.title}">
            <button class="round-button"></button>
            <span id="game-name">${
              game.title
            }<span id="game-price">${checkGamePrice(game.price)}</span></span>
              </div>`;
    el.insertAdjacentHTML("beforeend", html);
  });
};
//

// filter genre games function //

const filterGenre = function (price, genre, rating) {
  const result = arrGames.filter(
    (game) =>
      game.price <= price && game.genre === genre && game.rating >= rating
  );

  addContentContainer(result, popupContent);
};

//////////

// add to shopping cart logic //
popupContent.addEventListener("click", function (e) {
  const clicked = e.target.closest(".games-popup");

  // guard clause
  if (!clicked) return;
  if (clicked.classList.contains("selected")) return;

  clicked.classList.add("selected");
  const gameTitle = clicked.getAttribute("data-game-title");
  const selectedGame = arrGames.find((game) => game.title === gameTitle);

  if (selectedGame) {
    arrShoppingCart.push(selectedGame);
  }

  updateSelectedGames();
});

const selectedGameTitles = new Set();

const updateSelectedGames = function () {
  selectedGameTitles.clear();
  arrShoppingCart.forEach((game) => selectedGameTitles.add(game.title));
};
////////////////

// Open shopping cart //
openShoppingCart.addEventListener("click", function () {
  closePopup(popup);
  openPopup(shoppingCart);
  addContentContainer(arrShoppingCart, contentCart);
  totalPriceCart();
});
////////

// get total price of array shopping cart //
const totalPriceCart = function () {
  const priceTotal = arrShoppingCart.reduce((acc, game) => {
    return (acc += game.price);
  }, 0);
  priceContainer.textContent = priceTotal.toFixed(2);
};
/////////

// filter save and reset//
document
  .getElementById("save-filter-btn")
  .addEventListener("click", function () {
    const priceFilter = document.getElementById("price-filter").value;
    const genreFilter = document.getElementById("genre-filter").value;
    const ratingFilter = document.getElementById("rating-filter").value;

    filterGenre(priceFilter, genreFilter, ratingFilter);
  });

document
  .getElementById("reset-filter-btn")
  .addEventListener("click", function () {
    document.getElementById("price-filter").value = "";
    document.getElementById("genre-filter").value = "";
    document.getElementById("rating-filter").value = "";

    addContentContainer(arrGames, popupContent);
  });
//
