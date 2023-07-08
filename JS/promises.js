function register() {
  // waitForThreeSecond();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Register End");
      resolve("success");
    }, 1000);
  });
}

function sendEmail() {
  // waitForThreeSecond();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Email End");
      resolve();
    }, 5000);
  });
}

function login() {
  // waitForThreeSecond();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login end");
      resolve();
    }, 3000);
  });
}

function getUserData() {
  // waitForThreeSecond();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Got User Data");
      resolve();
    }, 1000);
  });
}

function displayUserData() {
  // waitForThreeSecond();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User Data Displayed");
      resolve();
    }, 1000);
  });
}

//callback-hell
// register(function () {
//   sendEmail(function () {
//     login(function () {
//       getUserData(function () {
//         displayUserData();
//       });
//     });
//   });
// });

// register()
//   .then(sendEmail)
//   .then(login)
//   .then(getUserData)
//   .then(displayUserData)
//   .catch((err) => {
//     console.log("Error: ", err);
//   });

//Async await

async function authenticate() {
  try {
    await register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();
    console.log(message);
  } catch (err) {
    console.log("Error: ", err);
    throw new Error();
  }
}

authenticate()
  .then(() => {
    console.log("All Set!");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

console.log("Other application work");
