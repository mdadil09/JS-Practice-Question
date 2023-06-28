// Create an array of objects representing products in an online store. Each object
// has the following properties: id, name, price, and category. Write a React component
// that takes the array of products as input and returns an unordered list of products,
// where each list item displays the product's name, price, and category.

import React from "react";
import { products } from "../data";
import "./index.css";

const Cart = () => {
  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col1">ID</div>
          <div className="col col2">Product Name</div>
          <div className="col col3">Price</div>
          <div className="col col4">Category</div>
        </li>
        {products.map((product) => (
          <li className="table-row">
            <div className="col col1" data-label="ID">
              {product.id}
            </div>
            <div className="col col2" data-label="Product Name">
              {product.name}
            </div>
            <div className="col col3" data-label="Price">
              {product.price}
            </div>
            <div className="col col4" data-label="Category">
              {product.category}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
