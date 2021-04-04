import React, { useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movie from '../../Pages/Movie';
import Movies from '../../Pages/Movies';
import { DEFAULT_MOVIE_DETAILS } from '../../Constants';
import { getMoviesToDisplayData, getMoviesToDisplay } from '../../Utils';

function Page({ movies, filter }) {
  const { genres, genre, selector } = filter;
  const [showMovieDescription, changeShowMovieDescription] = useState(false);
  const [movieDetails, changeMovieDetails] = useState(DEFAULT_MOVIE_DETAILS);

  const moviesToDisplay = getMoviesToDisplay(
    //TODO delete
    movies.data,
    genre,
    selector
  );

  const moviesNumber = moviesToDisplay.length;
  const moviesToDisplayData = getMoviesToDisplayData(moviesToDisplay);
  const moviesProps = {
    showMovieDescription,
    changeShowMovieDescription,
    moviesData: moviesToDisplayData,
    moviesNumber,
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
