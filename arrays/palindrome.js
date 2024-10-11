// Find count occurrence of Palindrome in a list
/* input: 10 121 133 155 141 252
  output: 121 141 252
  Total no. of palindrome is 3 */

var arr = [10, 121, 133, 155, 141, 252];

function getPalindromeCount(arr) {
  let palindromeCount = 0;
  let palindromeArray = [];
  for (let i = 0; i < arr.length; i++) {
    let reverseString = arr[i].toString().split("").reverse().join("");
    if (arr[i] == reverseString) {
      palindromeArray.push(arr[i]);
      palindromeCount++;
    }
  }
  console.log("Palindrome arrays in [10, 121, 133, 155, 141, 252] >>>", palindromeArray);
  return palindromeCount;
}

var count = getPalindromeCount(arr);
console.log("Total no. of palindrome is", count);
