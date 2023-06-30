/* Create an array of objects representing recipes in a cookbook. Each object has the 
following properties: id, recipe name, recipe creator name. Write a React component 
that takes the array of recipes as input and returns an unordered list, 
where each list item displays the recipe's name and recipe creator name. */

import React from "react";
import { recipes } from "../data";
import "./index.css";

const Recipies = () => {
  return (
    <div className="container">
      <h2>Recipe List</h2>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col1">ID</div>
          <div className="col col2">Name</div>
          <div className="col col3">Creator Name</div>
        </li>
        {recipes.map((recipe) => (
          <li className="table-row" key={recipe.id}>
            <div className="col col1" data-label="ID">
              {recipe.id}
            </div>
            <div className="col col2" data-label="Name">
              {recipe.name}
            </div>
            <div className="col col3" data-label="Creator Name">
              {recipe.creator}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipies;
