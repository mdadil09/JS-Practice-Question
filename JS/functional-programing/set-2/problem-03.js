//Given employee’s data, write an ES6 function which greets them with a personalized message for onboarding.

const employeeData = [
  { name: "ram", dept: "marketer" },
  { name: "Radha", dept: "SDE" },
  { name: "shyam", dept: "finance professional" },
];

// Your code here

/* const greetSMS = (arr) =>
  arr.map(
    (employeeData) =>
      `Hi ${employeeData.name} we are glad to have you as a ${employeeData.dept}`
  ); */

const greetEmployeeMessages = employeeData.map(
  ({ name, dept }) => `Hi ${name} we are glad to have you as a ${dept}`
);

console.log(greetEmployeeMessages);
// Output: ['Hi ram we are glad to have you as a marketing', 'Hi Radha we are glad to have you as a SDE', 'Hi shyam we are glad to have you as a finance professional']
