import React, { Component } from "react";
import * as moviesAPI from "../services/fakeMovieService";
import Like from "./Like";
import Pagination from "../components/common/Pagination";
import Paginate from "./utils/Paginate";

class Movies extends Component {
  state = {
    movies: moviesAPI.getMovies(),
    pageSize: 4,
    currentPage: 1
  };

  handleDelete = movie_id => {
    console.log(movie_id);
    let moviesTmp = [...this.state.movies];
    let indexOfMovieToDelete = moviesTmp.findIndex(elt => elt._id === movie_id);
    console.log(indexOfMovieToDelete);
    moviesTmp.splice(indexOfMovieToDelete, 1);
    this.setState({ movies: moviesTmp });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    let index = movies.findIndex(m => m._id === movie._id);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
    // let movies = [...this.state.movies];
    // let start = Math.ceil((page - 1) * this.state.itemCount);
    // console.log(start);
    // movies = movies.slice(start, start + this.state.itemCount);
    // this.setState({ movies });
    // console.log(movies);
  };

  render() {
    let { length: count } = this.state.movies;
    let { pageSize, currentPage, movies: allMovies } = this.state;
    let movies = Paginate(allMovies, currentPage, pageSize);

    if (count === 0) {
      return <p>There are no movies in the database.</p>;
    }

    return (
      <React.Fragment>
        <main role="main" className="container">
          <p>{`Showing ${count} movies in the database.`}</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onclicked={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default Movies;
