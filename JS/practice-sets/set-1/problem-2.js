const isGreater = (a, b) => {
  return a > b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`;
};

console.log(isGreater(2, 5));
console.log(isGreater(10, 5));
