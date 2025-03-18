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
///////

// fetch call to the json file //
fetch("./assets/games.json")
  .then((response) => response.json())
  .then((games) => {
    arrGames.push(...games);
    addPopupContent();
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

// add to shopping cart logic //
popupContent.addEventListener("click", function (e) {
  const clicked = e.target.closest(".games-popup");

  // guard clause
  if (clicked.classList.contains("selected")) return;

  clicked.classList.add("selected");
  const index = clicked.getAttribute("data-game-index");

  arrShoppingCart.push(arrGames[index]);
});
////////////////

// Open shopping cart //
openShoppingCart.addEventListener("click", function () {
  closePopup(popup);
  openPopup(shoppingCart);
  addContentCart();
});
////////

// add content to cart //
const addContentCart = function () {
  arrShoppingCart.forEach((game) => {
    const html = `
        <div class="games-popup">
          <button class="round-button"></button>
          <span id="game-name">${
            game.title
          }<span id="game-price">${checkGamePrice(game.price)}</span></span>
        </div>`;
    contentCart.insertAdjacentHTML("beforeend", html);
  });
};
//////
