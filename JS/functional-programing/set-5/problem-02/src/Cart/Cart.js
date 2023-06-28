// Create an array of objects representing products in an online store. Each object
// has the following properties: id, name, price, and category. Write a React component
// that takes the array of products as input and returns an unordered list of products,
// where each list item displays the product's name, price, and category.

import React from "react";
import { products } from "../data";
import "./index.css";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="header">
        <h3 className="heading">Shopping Cart</h3>
        <h5 className="action">Remove all</h5>
      </div>
      <hr />
      {products.map((product) => (
        <div className="cart-item">
          <img
            src={product.image}
            style={{ height: "120px", width: "120px" }}
            alt=""
          />
          <div className="title">{product.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
