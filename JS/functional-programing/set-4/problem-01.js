//Given an array, write an ES6 function that returns the total length of all the strings in an array.

const strings = ["apple", "banana", "cherry", "date", "blueberry"];
// Your code here

// const totalLength = (strings) =>
//   strings.map((item) => item.length).reduce((sum, item) => (sum += item), 0);

const totalLength = (strings) =>
  strings.reduce((sum, item) => sum + item.length, 0);

console.log(totalLength(strings));
// Output: 30
