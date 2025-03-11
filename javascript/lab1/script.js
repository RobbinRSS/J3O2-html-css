let fibonacciReeks = [0, 1];

function loopFibonacci(arr) {
  for (let i = arr.length; i < 20; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr;
}

console.log(loopFibonacci(fibonacciReeks));
