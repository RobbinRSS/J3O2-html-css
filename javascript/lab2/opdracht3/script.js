let arrayEen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayTwee = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const calc2Arr = function (op, arr1, arr2) {
  let solvedArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (op === "+") {
      solvedArr.push(arr1[i] + arr2[i]);
    } else if (op === "-") {
      solvedArr.push(arr2[i] - arr1[i]);
    } else if (op === "*") {
      solvedArr.push(arr1[i] * arr2[i]);
    } else if (op === "/") {
      solvedArr.push(arr2[i] / arr1[i]);
    } else {
      throw new Error("Ongeldige operator");
    }
  }
  return solvedArr;
};

console.log(calc2Arr("+", arrayEen, arrayTwee));
console.log(calc2Arr("-", arrayEen, arrayTwee));
console.log(calc2Arr("*", arrayEen, arrayTwee));
console.log(calc2Arr("/", arrayEen, arrayTwee));
