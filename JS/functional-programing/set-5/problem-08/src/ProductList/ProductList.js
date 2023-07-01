// Create an array of objects representing products in an online store. Each object has the
// following properties: id, name, price, and category. Write a React component that takes
// the array of products as input and generates an ordered list of products, where each list
// item displays the product's name, price, and category.

import React from "react";
import { products } from "../data";
import "./index.css";

const ProductList = () => {
  return (
    <div className="container">
      <h2>Product's List</h2>
      <ol className="responsive-table">
        <li className="table-header">
          <div className="col col1">ID</div>
          <div className="col col2">Product Name</div>
          <div className="col col3">Category</div>
          <div className="col col4">Price</div>
        </li>
        {products.map((product) => (
          <li className="table-row" key={product.id}>
            <div className="col col1" data-label="ID">
              {product.id}
            </div>
            <div className="col col2" data-label="Product Name">
              {product.name}
            </div>
            <div className="col col3" data-label="Category">
              {product.category}
            </div>
            <div className="col col4" data-label="Price">
              {product.price}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ProductList;
