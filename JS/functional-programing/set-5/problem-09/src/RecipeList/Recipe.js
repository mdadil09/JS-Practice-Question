// Create an array of objects representing recipes in a cookbook. Each object has the
// following properties: id, name, ingredients, and instructions. Write a React component
// that takes the array of recipes as input and generates an ordered list of recipes,
// where each list item displays the recipe's name, ingredients, and instructions.

import React from "react";
import { recipes } from "../data";
import "./index.css";

const Recipe = () => {
  return (
    <div className="container">
      <h2>Recipe List</h2>
      <ol>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>
              {recipe.id}. {recipe.name}
            </h3>
            <h3>Ingredients:</h3>
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
            <h3>Instructions:</h3>
            <ul>
              {recipe.instructions.map((instruction) => (
                <li key={instruction}>{instruction}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
