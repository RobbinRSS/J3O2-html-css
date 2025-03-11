const amountNames = prompt("voeg minimaal 3 namen");

const arrNames = amountNames.split(" ");
console.log(arrNames);

if (arrNames.length >= 3) {
  const title = document.createElement("h2");
  title.textContent = "Ingevoerde namen zijn:";
  document.body.appendChild(title);

  const names = document.createElement("h2"); // Maak een aparte h2 voor de namen
  names.textContent = arrNames.join(", ");
  document.body.appendChild(names);
}
