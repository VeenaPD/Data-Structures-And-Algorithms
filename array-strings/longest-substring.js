// Given a string S, find the longest repeating non-overlapping substring in it.
// In other words find 2 identical substrings of maximum length which do not overlap.
// If there exists more than one such substring return any of them.
// Print the longest non-overlapping substring. If no such substring exists print -1.

function longestSubstring(str, n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n - i; j++) {
      // console.log(str.substring(i, n));
      arr.push(str.substring(i, j));
    }
  }
  // let newArr = [...new Set(arr)];
  //   newArr.forEach((item) => {
  //     const i = arr.indexOf(item);
  //     arr = arr.slice(0, i).concat(arr.slice(i + 1, arr.length));
  //   });
  return arr;
}

const str = "geeksforgeeks";
console.log(longestSubstring(str, str.length));
