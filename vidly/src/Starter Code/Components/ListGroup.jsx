import React from "react";

const ListGroup = ({
  genres,
  currentGenre,
  textProperty,
  valueProperty,
  onListChange
}) => {
  return (
    <ul className="list-group">
      {genres.map(genre => (
        <li
          key={genre[valueProperty]}
          className={
            currentGenre === genre[valueProperty]
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onListChange(genre[valueProperty])}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
