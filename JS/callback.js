// function taskOne() {
//   console.log("Task 1");
// }

// function taskTwo() {
//   console.log("Task 2");
// }

// setTimeout(taskOne, 2000);
// taskTwo();

// const message = () => {
//   console.log("This message will show up after 3 seconds");
// };

// setTimeout(message, 3000);

// setTimeout(function () {
//   console.log("This message will show up after 3 seconds");
// }, 3000);

// function fakeFetch(msg, shouldReject) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldReject) {
//         reject(`error from server: ${msg}`);
//       }
//       resolve(`from server: ${msg}`);
//     }, 3000);
//   });
// }

// const callFakeFetch = async () => {
//   try {
//     const fake = await fakeFetch();
//     console.log(fake);
//   } catch (error) {
//     console.log(error);
//   }
// };

// callFakeFetch();

// function waitForThreeSecond() {
//   let ms = 3000 + new Date().getTime();
//   while (new Date() < ms) {}
// }

// function register(callback) {
//   // waitForThreeSecond();
//   setTimeout(() => {
//     console.log("Register End");
//     callback();
//   }, 1000);
// }

// function sendEmail(callback) {
//   // waitForThreeSecond();
//   setTimeout(() => {
//     console.log("Email End");
//     callback();
//   }, 2000);
// }

// function login(callback) {
//   // waitForThreeSecond();
//   setTimeout(() => {
//     console.log("login end");
//     callback();
//   }, 3000);
// }

// function getUserData(callback) {
//   // waitForThreeSecond();
//   setTimeout(() => {
//     console.log("Got User Data");
//     callback();
//   }, 1000);
// }

// function displayUserData() {
//   // waitForThreeSecond();
//   setTimeout(() => {
//     console.log("User Data Displayed");
//   }, 1000);
// }

// //callback-hell
// register(function () {
//   sendEmail(function () {
//     login(function () {
//       getUserData(function () {
//         displayUserData();
//       });
//     });
//   });
// });

// console.log("Other application work");
