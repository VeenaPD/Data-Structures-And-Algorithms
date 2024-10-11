// Subarray with given sum
/**
 * Given an unsorted array A of size N that contains only non-negative integers,
 * find a continuous sub-array which adds to a given number S.
 * Input:
   N = 5, S = 12
   A[] = {1,2,3,7,5}
   Output: 2 4
   Explanation: The sum of elements 
   from 2nd position to 4th position 
   is 12.
 */

var A = [1, 2, 3, 7, 5];
var N = 5,
  S = 12;
var sortedArray = A.sort();
var subArray = [];
var storeItems = [];
function findSubarray(arr, sum) {
  for (let i = 0; i < N + 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (arr[i] + arr[j] == sum) {
        subArray.push(arr[i], arr[j]);
      }
    }
  }
  return subArray;
}
storeItems = findSubarray(sortedArray, S);
console.log("A continuous sub-array which adds to 12 >>>", storeItems);
