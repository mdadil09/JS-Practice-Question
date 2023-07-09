// Use this URL - https://example.com/login to make a fake fetch call and show the status like it is authenticated
// or not with a message in the DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this
// question.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/login") {
        resolve({
          status: 200,
          data: {
            auth: true,
          },
        });
      } else {
        reject({
          status: 404,
          message: "Status not found",
        });
      }
    }, 2000);
  });
};

// your code here

const displayOutput = document.querySelector("#output");

fakeFetch("https://example.com/login")
  .then((res) => {
    if (res.status === 200 && res.data.auth === true) {
      displayOutput.textContent = "Verified";
    }
  })
  .catch((err) => {
    console.log(err.message);
  });

// Output on the DOM should be:
// Verified
