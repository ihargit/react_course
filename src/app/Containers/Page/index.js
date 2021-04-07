import React, { useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ModalWrap from '../../Components/ModalWrap';

import Movie from '../../Pages/Movie';
import Search from '../../Pages/Search';
import { DEFAULT_MOVIE_DETAILS } from '../../Constants';
import { mapMoviesData } from '../../Utils';

function Page({ movies }) {
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
      <Router forceRefresh="false">
        <Switch>
          <Route path="/search">
            <Search {...moviesProps} />
          </Route>
          <Route path="/film/:id">
            <Movie {...moviesProps} />
          </Route>
        </Switch>
      </Router>
      <ModalWrap />
    </>
  );
}

const mapState = ({ movies }) => ({ movies });
export default connect(mapState)(Page);
