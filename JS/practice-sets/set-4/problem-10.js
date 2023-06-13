//Write an ES6 function that takes an array of objects and returns the sum of all ages.

// Your ES6 code here

var array = [
  {
    name: "Jay",
    age: 60,
  },
  {
    name: "Gloria",
    age: 36,
  },
  {
    name: "Manny",
    age: 16,
  },
  {
    name: "Joe",
    age: 9,
  },
];

/* const sumOfAges = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].age;
  }
  return sum;
}; */

const sumOfAges = (array) => {
  const sum = array.reduce((acc, obj) => {
    return acc + obj.age;
  }, 0);
  return sum;
};

console.log(sumOfAges(array)); // 121
