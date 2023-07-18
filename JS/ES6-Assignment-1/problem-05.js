// Write an ES6 function that takes two array of numbers of equal length and returns a new array with the sum of
// each corresponding element in the two arrays. Avoid using in-built methods.

// Your ES6 code here
const sumArrays = (arr1, arr2) => {
  let newArr = [];
  let n = arr1.length;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    sum = arr1[i] + arr2[i];
    newArr.push(sum);
  }
  return newArr;
};

console.log(sumArrays([1, 2, 3, 4], [1, 2, 3, 5])); // [2, 4, 6, 9]
