const arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let newArr = [];

const userInput = Number(prompt("Voer een getal in"));

if (userInput === 20) {
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    console.log(newArr);
  }
}
