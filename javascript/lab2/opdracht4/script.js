const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const calcTable = function (arr, table) {
  return arr.map((x) => x * table);
};

console.log(calcTable(array, 2));
console.log(calcTable(array, 4));
console.log(calcTable(array, 6));
console.log(calcTable(array, 8));
