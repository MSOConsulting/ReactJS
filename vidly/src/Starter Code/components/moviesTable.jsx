import React, { Component } from "react";
import Like from "./Like";
import TableHeader from "./common/tableHeader";
import TableBody from "../components/tableBody";
class MoviesTable extends Component {
  render() {
    let { movies, onSort, sortColumn } = this.props;
    let columns = [
      { path: "title", name: "Title" },
      { path: "genre.name", name: "Genre" },
      { path: "numberInStock", name: "Stock" },
      { path: "dailyRentalRate", name: "Rate" },
      {
        key: "like",
        content: movie => (
          <Like liked={movie.like} onClick={() => this.props.onLike(movie)} />
        )
      },
      {
        key: "delete",
        content: movie => (
          <button
            onClick={() => this.props.onDelete(movie._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        )
      }
    ];
    return (
      <div>
        <table className="table">
          <TableHeader
            columns={columns}
            sortColumn={sortColumn}
            onSort={onSort}
          />
          <TableBody data={movies} columns={columns} />
        </table>
      </div>
    );
  }
}

export default MoviesTable;
