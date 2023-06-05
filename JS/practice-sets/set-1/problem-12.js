// Your ES6 code here
let book = {
  title: "C++",
  author: "Dennis Ritchie",
  pages: 101,
};

const getBookDetails = () => {
  if (book.pages > 100) return true;
  return false;
};

console.log(getBookDetails(book)); // logs 'true' if the pages are above 100
console.log(getBookDetails(book)); // logs 'false' if the pages are 100 or below
