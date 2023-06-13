const checkForAlphabetA = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a" || s[i] === "A") {
      return "Include a";
    }
  }
  return "Does not include a";
};

console.log(checkForAlphabetA("Tanay"));
console.log(checkForAlphabetA("Jeep"));
console.log(checkForAlphabetA("Jane"));
