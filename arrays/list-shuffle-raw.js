// Write a program to shuffle a list without using inbuilt methods
//  Fisher-Yates shuffle Algorithm: for generating a random permutation of a finite sequence—in plain terms, the algorithm shuffles the sequence.
/* input = [1,2,3]
output = [1,3,2] */

var arr = [1, 2, 3];

var shuffle = function (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    // swap elements array[i] and array[randIndex]
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

var shuffledArray = shuffle(arr);
console.log("Shuffled Array " + shuffledArray);
