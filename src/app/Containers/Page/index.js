import React, { useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movie from '../../Pages/Movie';
import Movies from '../../Pages/Movies';
import { DEFAULT_MOVIE_DETAILS } from '../../Constants';
import { mapMoviesData } from '../../Utils';

function Page({ movies, filter }) {
  const [showMovieDescription, changeShowMovieDescription] = useState(false);
  const [movieDetails, changeMovieDetails] = useState(DEFAULT_MOVIE_DETAILS);

  const moviesToDisplayData = mapMoviesData(movies.data);
  const moviesProps = {
    showMovieDescription,
    changeShowMovieDescription,
    moviesData: moviesToDisplayData,
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

const mapState = ({ movies, filter }) => ({ movies, filter });
export default connect(mapState)(Page);
