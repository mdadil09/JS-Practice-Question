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

function fakeFetch(msg, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`);
      }
      resolve(`from server: ${msg}`);
    }, 3000);
  });
}

const callFakeFetch = async () => {
  try {
    const fake = await fakeFetch();
    console.log(fake);
  } catch (error) {
    console.log(error);
  }
};

callFakeFetch();
