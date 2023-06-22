//Write an ES6 function that takes an array of strings as input and concatenates them into a single string.

// Your code here

const concatStrings = (arr) => arr.reduce((acc, item) => acc + item.concat());

console.log(concatStrings(["this", "is", "fun"])); // Output: 'thisisfun'
