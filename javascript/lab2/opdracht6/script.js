const arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const userInput = Number(prompt("Voer een getal in"));

if (userInput === 20) {
  let str = arr.join(""); // Zet de array om in een string zonder komma's, sinds strings in js een index hebben

  for (let i = str.length; i > 0; i--) {
    console.log(str.slice(0, i));
  }
}
