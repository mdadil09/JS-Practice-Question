// Write an ES6 function that takes an object with x and y properties and returns an array containing the values of
// x and y.

// Your ES6 code here

const point = { x: 5, y: 10 };

const getCoordinates = ({ x, y }) => {
  let arr = [];
  arr.push(x, y);
  return arr;
};

console.log(getCoordinates(point)); // [5, 10]
