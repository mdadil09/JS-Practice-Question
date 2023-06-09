/* Write a function findPerson that takes an array of person objects and a name as parameters and 
returns the object with the matching name, or null if not found. */

// Your ES6 code here

const findPerson = (persons, s) => {
  const matched = persons.find((person) => person.name === s);
  return matched ? matched : null;
};

console.log(
  findPerson(
    [
      { name: "Amay", age: 25 },
      { name: "Akhil", age: 25 },
    ],
    "Akhil"
  )
);
