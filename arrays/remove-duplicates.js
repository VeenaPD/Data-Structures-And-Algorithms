// Remove duplicates: Find unique elements in an array. Input = [1,2,2,3,4,4,5], output = [ 1, 2, 3, 4, 5 ]

var arr = [1, 2, 2, 3, 4, 4, 5];
var uniqueElements = [...new Set(arr)];
console.log("Unique elements in an array [1,2,2,3,4,4,5] >>>", uniqueElements);
