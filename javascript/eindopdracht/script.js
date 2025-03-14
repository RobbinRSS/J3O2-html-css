fetch("./assets/games.json")
  .then((response) => response.json())
  .then((games) => console.log(games))
  .catch((error) => console.error("Fout bij laden JSON:", error));
