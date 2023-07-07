// Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch
// has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/chat") {
        reject({
          status: 503,
          message: "Service Unavailable",
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

fakeFetch("https://example.com/api/chat")
  .then((response) => console.log(response))
  .catch((error) => {
    if (error.status === 503) {
      displayOutput.textContent =
        "We are facing high demand at the moment. Please check back later in sometime.";
    }
  });

// Output on the DOM should be:
// We are facing high demand at the moment. Please check back later in sometime.
