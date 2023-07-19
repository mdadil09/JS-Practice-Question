// Write an ES6 function that takes an object representing a car and returns its make, model and year using object
// destructuring.

// Your ES6 code here

const getCarDetails = ({ make, model, year }) => {
  console.log(`Make: ${make}, Model: ${model}, Year: ${year}`);
};

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2015,
  color: "gray",
};
getCarDetails(car); // "Make: Toyota, Model: Corolla, Year: 2015"
