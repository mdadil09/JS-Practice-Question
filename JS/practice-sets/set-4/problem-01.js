/* Write an ES6 function that accepts an array of integers and 
returns the maximum element in the array. Avoid using in-built methods. */

// Your ES6 code here

const getMaxElement = (array) => {
  let temp = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > temp) temp = array[i];
  }
  return temp;
};

let array = [4, 78, 8, 3, 6, 0, 12, 34];
console.log(getMaxElement(array)); // 78
