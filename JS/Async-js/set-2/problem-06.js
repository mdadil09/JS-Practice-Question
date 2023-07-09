// Use this URL - https://example.com/api/productlist to make a fake fetch call and print the total price of
// all the products. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in
// CodeSandbox for this question.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/productlist") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { itemName: "Shoes", price: 100, quantity: 2 },
            { itemName: "Hat", price: 350, quantity: 1 },
            { itemName: "Tshirt", price: 410, quantity: 5 },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      }
    }, 2000);
  });
};

// Your Code here
const displayOutput = document.querySelector("#output");

fakeFetch("https://example.com/api/productlist")
  .then((res) => {
    const total = res.data.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    displayOutput.innerHTML = `Total: INR ${total}`;
  })
  .catch((err) => {
    console.log(err.message);
  });

// Output on the DOM should be:
// Total: INR 2600
