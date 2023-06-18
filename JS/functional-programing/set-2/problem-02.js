//Given an array, write an ES6 function to return a new array with all the elements multiplied by 5.

const numbers = [1, 2, 3, 4];
// Your code here

const mul = (numbers) => numbers.map((item) => item * 5);

const multiplyByFive = mul(numbers);

console.log(multiplyByFive); // Output: [5, 10, 15, 20]
