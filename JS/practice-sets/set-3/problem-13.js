/* Create a function which takes in the given object and returns 
another object only with the properties postalCode and city in it. */

// Your ES6 code here

const userData = {
  name: "Jane Doy",
  postalCode: "12134",
  city: "Germany",
};

const getAddress = ({ postalCode, city }) => ({ postalCode, city });

console.log(getAddress(userData));
// {postalCode: '12134', city: 'Germany'}
