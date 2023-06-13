/* Convert the function getData, into an ES6 function with last amount of characters. */

const getData = ({ name, address: { city } }) => {
  console.log(name); // John Doe
  console.log(city); // New York
};

const person = {
  name: "John Doe",
  address: {
    city: "New York",
    state: "NY",
  },
};
getData(person);
