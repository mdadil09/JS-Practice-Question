// Write an ES6 function to reverse a string in JavaScript without using in-built methods.

// Your ES6 code here

const reverseString = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

console.log(reverseString("file")); // elif
