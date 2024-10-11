// Find missing number in a array
/* input = [1,2,7,3,8,4,6]
output = 5 */

var arr = [1, 2, 7, 3, 8, 4, 6];

var sortedArray = arr.sort((a, b) => a - b);
console.log("Sorted Array " + sortedArray);

for (let i = 0; i < sortedArray.length; i++) {
  if (i + 1 !== sortedArray[i]) {
    console.log("Missing number in [1,2,7,3,8,4,6] is " + (i + 1));
    break;
  }
}
