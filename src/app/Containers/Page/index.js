import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as allMovies from './movies.json';
import Movies from '../../Pages/Movies';
import Movie from '../../Pages/Movie';
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

export default function Page() {
  const [movies, setMovies] = useState(allMovies);
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
    setMovies,
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
