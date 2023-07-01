// Create an array of objects representing movies in your watchlist. Each object has the
// following properties: id, title, director, and runtime. Write a React component that
// takes the array of movies as input and generates an ordered list of movies, where each
// list item displays the movie's title, director, and runtime.

import React from "react";
import { movies } from "../data";
import "./index.css";

const WatchList = () => {
  return (
    <div className="container">
      <h2>Movie WatchList</h2>
      <ol className="responsive-table">
        <li className="table-header">
          <div className="col col1">Image</div>
          <div className="col col2">Title</div>
          <div className="col col3">Director</div>
          <div className="col col4">Runtime</div>
          <div className="col col5">Rating</div>
        </li>
        {movies.map((movie) => (
          <li className="table-row" key={movie.id}>
            <div className="col col1" data-label="Image">
              <img src={movie.image} alt="" style={{ height: "120px" }} />
            </div>
            <div className="col col2" data-label="Title">
              {movie.title}
            </div>
            <div className="col col3" data-label="Director">
              {movie.director}
            </div>
            <div className="col col4" data-label="Runtime">
              {movie.runtime}
            </div>
            <div className="col col5">⭐{movie.rating}</div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default WatchList;
