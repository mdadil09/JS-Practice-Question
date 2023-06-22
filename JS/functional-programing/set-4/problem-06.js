//Write an ES6 function that takes an array of strings and returns the longest string.

const strings = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];
// Your code here

const longestString = (strings) =>
  strings.reduce((acc, item) => (acc.length < item.length ? item : acc));

console.log(longestString(strings));
// Output: 'Haule Haule'
