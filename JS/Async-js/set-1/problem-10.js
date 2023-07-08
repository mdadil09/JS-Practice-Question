// Use this URL - https://example.com/api/profile to make a fake fetch call and handle errors if any. Show a proper
// message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been
// provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/profile") {
        reject({
          status: 401,
          message: "Unauthorized Access",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
          },
        });
      }
    }, 2000);
  });
};

// Your Code here

const displayOutput = document.querySelector("#output");

fakeFetch("https://example.com/api/profile")
  .then((res) => {
    const data = res.message;
    console.log(data.message);
  })
  .catch((error) => {
    const status = error.status;
    const message = error.message;
    if (error.status === 401) {
      displayOutput.textContent =
        "Unauthorized Access! Looks like you are not logged in. Please login to see your profile data.";
    } else {
      console.log(`Error: ${status} - ${message}`);
    }
  });

// Output on the DOM should be:
// Unauthorized Access! Looks like you are not logged in. Please login to see your profile data.
