// Write an ES6 function that takes an object with title and author properties and returns a string in the format
// "{title} by {author}". Do this using template literals and destructuring.

// Your ES6 code here
const getBookInfo = ({ title, author }) => `${title} by ${author}`;

const book = { title: "The Hobbit", author: "J.R.R. Tolkien" };
console.log(getBookInfo(book)); // "The Hobbit by J.R.R. Tolkien"
