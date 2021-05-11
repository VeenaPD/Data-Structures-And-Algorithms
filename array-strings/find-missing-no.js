// Find missing number in a array
/* input = [1,2,7,3,8,4,6]
output = 5 */

var arr = [1, 2, 7, 3, 8, 4, 6];

var sortedArray = arr.sort((a, b) => a - b);
console.log(sortedArray, "Sorted Array");

for (let i = 0; i < sortedArray.length; i++) {
  if (i + 1 !== sortedArray[i]) {
    console.log("Missing number is " + (i + 1));
    break;
  }
}
