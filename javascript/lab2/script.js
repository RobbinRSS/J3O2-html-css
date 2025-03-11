const weekdagen = [
  "maandag",
  "dinsdag",
  "woensdag",
  "donderdag",
  "vrijdag",
  "zaterdag",
  "zondag",
];

const reversedArray = weekdagen.slice().reverse(); // muteert niet de weekdagen array

document.getElementById("weekdagen").textContent = weekdagen.join(", ");
document.getElementById("werkdagen").textContent = weekdagen
  .slice(0, 5)
  .join(", ");
document.getElementById("weekenddagen").textContent = weekdagen.slice(6, 7);
document.getElementById("omgekeerdedagen").textContent =
  reversedArray.join(", ");
document.getElementById("werkdagenomgekeerd").textContent = reversedArray
  .slice(2, 7)
  .join(", ");
document.getElementById("weekenddagenomgekeerd").textContent = reversedArray
  .slice(0, 2)
  .join(", ");
