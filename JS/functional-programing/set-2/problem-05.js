//Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.

const studentName = [
  "Ram",
  "Anjali",
  "Arpit",
  "Bhanu Kumar",
  "Jaya",
  "Ankit",
  "shayam",
];
// Your code here

const getNameByA = (arr) =>
  studentName.filter((studentName) => studentName[0] == "A");

const studentNames = getNameByA(studentName);

console.log(studentNames);
// Output: ["Anjali", "Arpit", "Ankit"]
