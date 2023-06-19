//Write an ES6 function that takes an array of numbers and returns the first number that is divisible by 7.

const numbers = [1, 2, 3, 21, 14, 7];
// Your code here

const isDivBy7 = (numbers) =>
  numbers.find((item) => (item % 7 == 0 ? item : 0));

const isDivisibleBy7 = isDivBy7(numbers);

console.log(isDivisibleBy7);
// Output: 21
