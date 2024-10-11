// Find factorial of given n
// input: n = 7
// output: 5040
// Constraints: n cannot be negative

let n = 7;

function factorialUsingRecursion(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorialUsingRecursion(n - 1);
  }
}

let result = factorialUsingRecursion(n);
console.log("Factorial of 7 >>>", result);
