// Write an ES6 function that takes an array of objects, each with name and age properties, and returns an array
// containing the names of all people whose age is greater than or equal to 60. Avoid using in-built methods.

// Your ES6 code here

const people = [
  { name: "Alice", age: 69 },
  { name: "Bob", age: 47 },
  { name: "Charlie", age: 70 },
];

const getNamesOfAdults = (people) => {
  let arr = [];
  for (let i = 0; i < people.length; i++) {
    const x = people[i];
    if (x.age >= 60) {
      arr.push(x.name);
    }
  }
  return arr;
};

console.log(getNamesOfAdults(people)); // Output: ["Alice", "Charlie"]
