import React, { Component } from "react";

const ListGroup = ({ genres, currentGenre, onListChange }) => {
  return (
    <ul className="list-group">
      <li
        key="All"
        className={
          currentGenre === "All" ? "list-group-item active" : "list-group-item"
        }
        onClick={() => onListChange("All")}
      >
        All Genres
      </li>
      {genres.map(genre => (
        <li
          key={genre._id}
          className={
            currentGenre === genre.name
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onListChange(genre.name)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
