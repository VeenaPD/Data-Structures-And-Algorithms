// Fibonacci series: A series of numbers whose values are added result of previous two numbers. first and second element are always 0 , 1
// input: 6
// output: 0, 1, 1, 2, 3, 5

let n = 6;
let fibonacciSeries = [];

function fibonacciSeriesUsingRecursion(n) {
  if (n < 0) {
    console.log("n value is invalid");
  } else if (n < 2) {
    return n;
  } else {
    return (
      fibonacciSeriesUsingRecursion(n - 1) +
      fibonacciSeriesUsingRecursion(n - 2)
    );
  }
}

for (let i = 0; i < n; i++) {
  fibonacciSeries.push(fibonacciSeriesUsingRecursion(i));
}

console.log("Fibonacci series for 6 using recursion >>>", fibonacciSeries);
