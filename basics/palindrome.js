// Find given string is Palindrome or not
/* input: "kaYak"
  output: true */

// Using two pointer method
function isPalindrome(str) {
    let strToArr = str.split("");
  
    let start = 0;
    let end = strToArr.length - 1;
  
    for (let i = 0; i < strToArr.length; i++) {
      if (strToArr[start] != strToArr[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }

  console.log("`kaYak` is Palindrome? ", isPalindrome("kaYak"));