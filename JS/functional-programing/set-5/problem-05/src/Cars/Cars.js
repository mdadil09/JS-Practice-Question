// Create an array of objects representing cars in a dealership. Each object has the
// following properties: id, make, model, and price. Write a React component that takes
// the array of cars as input and returns an unordered list of cars, where each list item
// displays the car's make, model, and price.

import React from "react";
import { cars } from "../data";
import "./index.css";

const Cars = () => {
  return (
    <div className="container">
      <h2>Car's List</h2>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col1">ID</div>
          <div className="col col2">Company</div>
          <div className="col col3">Model</div>
          <div className="col col4">Price</div>
        </li>
        {cars.map((car) => (
          <li className="table-row" key={car.id}>
            <div className="col col1" data-label="ID">
              {car.id}
            </div>
            <div className="col col2" data-label="Company">
              {car.make}
            </div>
            <div className="col col3" data-label="Model">
              {car.model}
            </div>
            <div className="col col4" data-label="Price">
              {car.price}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
