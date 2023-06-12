/* write an ES6 function that takes an array of words and 
returns an array with all its elements whose length is greater than 5. */

// Your ES6 code here

const filterWords = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
      result.push(arr[i]);
    }
  }
  return result;
};

/* const filterWords = (arr) => {
  return arr.filter((item) => {
    return item.length > 5;
  });
};
 */
var words = ["eat", "sleep", "code", "repeat", "neog", "community", "Society"];
console.log(filterWords(words)); // ["repeat", "community"]
