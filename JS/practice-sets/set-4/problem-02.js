/* Write an ES6 function that takes an array of numbers and 
returns the average of all the numbers. Avoid using in-built methods. */

// Your ES6 code here

const calculateAverage = (arr) => {
  let avg = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = sum / arr.length;

  return avg;
};

console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
