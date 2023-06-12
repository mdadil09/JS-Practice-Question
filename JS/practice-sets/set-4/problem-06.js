/* Write an ES6 function that takes an array of objects and a property name and returns a new array 
with only the values of that property. Avoid using in-built methods. */

// Your ES6 code here

const getValues = (arr, name) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    let value = obj[name];
    res.push(value);
  }
  return res;
};

/* const getValues = (objArr) => {
  return objArr.map(({ name }) => name);
}; */

console.log(
  getValues(
    [
      { name: "John", age: 21 },
      { name: "Mary", age: 22 },
      { name: "Peter", age: 23 },
    ],
    "name"
  )
); // ["John", "Mary", "Peter"]
