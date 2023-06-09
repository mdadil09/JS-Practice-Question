/* Create a function that takes a product object as an argument and returns a string
 that includes the product name, price, and a message based on whether it is in stock or not. */

const product = {
  name: "Socks",
  price: 249,
  inStock: true,
};

const product1 = {
  name: "Shoe",
  price: "600",
  inStock: false,
};

const formatProduct = (product) =>
  `${product.name} cost is INR ${product.price} and ${
    product.inStock === true ? "is in stock" : "not in stock"
  }.`;

const message = formatProduct(product);
const message1 = formatProduct(product1);

console.log(message);
console.log(message1);

// Socks costs INR 249 and is in stock.
