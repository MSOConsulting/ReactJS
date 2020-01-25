import React, { Component } from "react";
import "./App.css";
import MoviesTable from "./Starter Code/components/moviesTable";
import Pagination from "./Starter Code/components/common/Pagination";
import * as moviesAPI from "./Starter Code/services/fakeMovieService";
import * as genresAPI from "./Starter Code/services/fakeGenreService";
import Paginate from "./Starter Code/components/utils/Paginate";
import ListGroup from "./Starter Code/components/ListGroup";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: moviesAPI.getMovies(),
    pageSize: 4,
    currentPage: 1,
    genres: genresAPI.getGenres(),
    currentGenre: 0,
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    let genres = [{ name: "All Genres", _id: 0 }, ...genresAPI.getGenres()];
    this.setState({ genres });
  }

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

  handleListChange = genreId => {
    this.setState({ currentGenre: genreId, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    let { length: sizeListMovies } = this.state.movies;
    let {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      currentGenre,
      sortColumn
    } = this.state;

    let moviesFiltered = allMovies.filter(f =>
      currentGenre === 0 ? f : f.genre._id === currentGenre
    );

    let sortedMovies = _.orderBy(
      moviesFiltered,
      [sortColumn.path],
      [sortColumn.order]
    );

    let movies = Paginate(sortedMovies, currentPage, pageSize);

    if (sizeListMovies === 0) {
      return <p>There are no movies in the database.</p>;
    }

    return (
      <React.Fragment>
        <main role="main" className="container">
          <div className="row">
            <div className="col-2">
              <ListGroup
                genres={genres}
                currentGenre={currentGenre}
                onListChange={this.handleListChange}
              />
            </div>
            <div className="col">
              <p>{`Showing ${sizeListMovies} movies in the database and ${movies.length} movies in the current page`}</p>
              <MoviesTable
                movies={movies}
                sortColumn={sortColumn}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
              />
              <Pagination
                itemCount={moviesFiltered.length}
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
