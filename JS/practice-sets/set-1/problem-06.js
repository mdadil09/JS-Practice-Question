const checkLength = (s) => {
  return s.length > 5 ? "More than 5 characters" : "Less than 5 characters";
};

console.log(checkLength("Programming"));
console.log(checkLength("Jeep"));
