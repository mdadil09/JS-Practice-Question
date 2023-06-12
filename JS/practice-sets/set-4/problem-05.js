//Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.

// Your ES6 code here

const capitalizeWords = (words) => {
  return words.map((strings) => strings.toUpperCase());
};

/* const capitalizeWords = (words) => {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(words[i].toUpperCase());
  }
  return result;
}; */

console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]));
// ["EAT", "SLEEP", "CODE", "REPEAT"]
