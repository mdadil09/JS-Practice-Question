// Make a fake fetch call that takes a message and a boolean value to get data and console the message received from
// the server. A fake fetch has been provided. You can practice this question in any JS editor or your browser console.

const fakeFetch = (msg, shouldSucceed) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve(`${msg}`);
      }
      reject(`error from server: ${msg}`);
    }, 3000);
  });
};

// Your Code here

const callFakeFetch = (message, shouldSucceed) => {
  fakeFetch(message, shouldSucceed)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
};

callFakeFetch("Hi", 3000);
// Hi -- after 3 seconds
