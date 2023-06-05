const isHelloPresent = (s) => {
  if (s.includes("Hello")) return true;
  return false;
};

console.log(isHelloPresent("Hello World")); // true
console.log(isHelloPresent("World")); // false
