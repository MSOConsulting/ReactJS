import React, { Component } from "react";
import "./App.css";
import * as moviesAPI from "./Starter Code/services/fakeMovieService";

class App extends Component {
  state = {
    movies: moviesAPI.getMovies()
  };

  handleDelete = movie_id => {
    console.log(movie_id);
    let moviesTmp = [...this.state.movies];
    let indexOfMovieToDelete = moviesTmp.findIndex(elt => elt._id === movie_id);
    console.log(indexOfMovieToDelete);
    moviesTmp.splice(indexOfMovieToDelete, 1);
    this.setState({ movies: moviesTmp });
  };

  formatMovieLengthMessage = () => {};

  render() {
    let { length: sizeListMovies } = this.state.movies;

    if (sizeListMovies === 0) {
      return <p>There are no movies in the database.</p>;
    }

    return (
      <React.Fragment>
        <main role="main" className="container">
          <p>{`Showing ${sizeListMovies} movies in the database.`}</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
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
        </main>
      </React.Fragment>
    );
  }
}

export default App;
