// Write an ES6 function that takes an array of strings and returns the shortest string in the array.

// Your ES6 code here

const getShortestString = (str) => {
  let curr = str[0];
  for (let i = 1; i < str.length; i++) {
    currLength = str[i];
    if (curr.length > currLength.length) {
      curr = currLength;
    }
  }
  return curr;
};

console.log(getShortestString(["primary", "secondary", "education", "exams"]));
// exams
