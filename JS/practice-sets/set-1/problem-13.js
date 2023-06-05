// Your ES6 code here

let person = {
  name: "Amit",
  age: 25,
  occupation: "Software Engineer",
};

const changeOccupation = () => {
  return (person.occupation = "Product Manager");
};

console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to the console
changeOccupation(person, "Product Manager");
console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Product Manager' } to the console
