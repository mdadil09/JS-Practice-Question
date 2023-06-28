// Create an array of objects representing books in a library. Each object has the
// following properties: id, title, author, and rating. Write a React component that
// takes the array of books as input and returns an unordered list of books, where each
// list item displays the book's title, author, and rating.

import React from "react";
import { books } from "../data";
import "./index.css";

const BookList = () => {
  return (
    <div className="container">
      <h2>Book List</h2>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col1">ID</div>
          <div className="col col2">Title</div>
          <div className="col col3">Author</div>
          <div className="col col4">Year</div>
          <div className="col col5">Genre</div>
          <div className="col col6">Rating</div>
        </li>
        {books.map((book) => (
          <li className="table-row" key={book.id}>
            <div className="col col1" data-label="ID">
              {book.id}
            </div>
            <div className="col col2" data-label="Title">
              {book.title}
            </div>
            <div className="col col3" data-label="Author">
              {book.author}
            </div>
            <div className="col col4" data-label="Year">
              {book.year}
            </div>
            <div className="col col5" data-label="Genre">
              {book.genre}
            </div>
            <div className="col col6" data-label="Rating">
              {book.rating}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
