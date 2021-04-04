import React, { useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movie from '../../Pages/Movie';
import Movies from '../../Pages/Movies';
import {
  DEFAULT_GENRE,
  DEFAULT_MOVIE_DETAILS,
  SELECTORS,
} from '../../Constants';
import {
  getGenres,
  getMoviesToDisplayData,
  getMoviesToDisplay,
} from '../../Utils';

const mapStateToPage = ({ movies }) => {
  return { movies };
}

function Page({ movies }) {
  // const [movies, setMovies] = useState(allMovies); // TODO setMovies
  const [genreToSelect, setGenre] = useState(DEFAULT_GENRE);
  const [selector, setSelector] = useState(SELECTORS[0].value);
  const [showMovieDescription, changeShowMovieDescription] = useState(false);
  const [movieDetails, changeMovieDetails] = useState(DEFAULT_MOVIE_DETAILS);

  const moviesToDisplay = getMoviesToDisplay(
    movies.data,
    genreToSelect,
    selector
  );
  const genresAmongSelectedMovies = getGenres(moviesToDisplay);
  const moviesNumber = moviesToDisplay.length;
  const moviesToDisplayData = getMoviesToDisplayData(moviesToDisplay);
  const moviesProps = {
    showMovieDescription,
    changeShowMovieDescription,
    moviesData: moviesToDisplayData,
    genres: genresAmongSelectedMovies,
    moviesNumber,
    genre: genreToSelect,
    setGenre,
    selector,
    setSelector,
    changeMovieDetails,
    movieDetails,
  };

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Movies {...moviesProps} />
          </Route>
          <Route path="/movie" exact>
            <Movie {...moviesProps} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default connect(mapStateToPage)(Page);
