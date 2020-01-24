import React, { Component } from "react";
import "./App.css";
import Like from "./Starter Code/Components/Like";
import Pagination from "./Starter Code/Components/Pagination";
import * as moviesAPI from "./Starter Code/services/fakeMovieService";
import * as genresAPI from "./Starter Code/services/fakeGenreService";
import Paginate from "./Starter Code/Components/utils/Paginate";
import ListGroup from "./Starter Code/Components/ListGroup";

class Movies extends Component {
  state = {
    movies: moviesAPI.getMovies(),
    pageSize: 4,
    currentPage: 1,
    genres: genresAPI.getGenres(),
    currentGenre: "All"
  };

  handleDelete = movie_id => {
    let moviesTmp = [...this.state.movies];
    let movies = moviesTmp.filter(m => m._id !== movie_id);
    this.setState({ movies });
  };

  handleLike = movie => {
    let movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    movies[index].like = !movies[index].like;
    this.setState({ movies });
  };

  handlePageChanged = page => {
    this.setState({ currentPage: page });
  };

  handleListChange = genreName => {
    this.setState({ currentGenre: genreName });
    this.setState({ currentPage: 1 });
  };

  render() {
    let { length: sizeListMovies } = this.state.movies;
    let {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      currentGenre
    } = this.state;

    const filtered =
      currentGenre || currentGenre._id
        ? allMovies.filter(f =>
            currentGenre === "All" ? f : f.genre.name === currentGenre
          )
        : allMovies;

    let movies = Paginate(filtered, currentPage, pageSize);

    if (sizeListMovies === 0) {
      return <p>There are no movies in the database.</p>;
    }

    return (
      <React.Fragment>
        <main role="main" className="container">
          <div className="row">
            <div className="col-md-auto">
              <ListGroup
                genres={genres}
                currentGenre={currentGenre}
                onListChange={this.handleListChange}
              />
            </div>
            <div className="col">
              <p>{`Showing ${this.state.movies.length} movies in the database and ${movies.length} movies in the current page`}</p>

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
                          liked={movie.like}
                          onClick={() => this.handleLike(movie)}
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
                itemCount={sizeListMovies}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={this.handlePageChanged}
              />
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Movies;
