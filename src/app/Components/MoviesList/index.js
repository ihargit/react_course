import React, { useState } from 'react';
import { connect } from 'react-redux';
import './style.css';
import MoviesFound from './moviesFound';
import Movies from './movies';
import MoviesFilter from '../MoviesFilter';
import { MODALS } from '../../Constants';
import { actionCreators } from '../../Store/Actions';

const MoviesList = ({
  moviesData,
  changeShowMovieDescription,
  changeMovieDetails,
  movieDetails,
  dispatch,
}) => {
  const deleteMovie = (id) =>
    dispatch(actionCreators.showModal({ mode: MODALS.delete, movieId: id }));
  const editMovie = (id) =>
    dispatch(actionCreators.showModal({ mode: MODALS.edit, movieId: id }));

  return (
    <>
      <MoviesFilter />
      <div className="container-padding">
        <MoviesFound number={moviesData.length} />
      </div>
      <div className="container-padding flex-grow-10">
        <Movies
          deleteMovie={deleteMovie}
          editMovie={editMovie}
          data={moviesData}
          changeShowMovieDescription={changeShowMovieDescription}
          changeMovieDetails={changeMovieDetails}
          movieDetails={movieDetails}
        />
      </div>
    </>
  );
};

const mapState = ({ modal, movies: { data: moviesData} }) => ({ modal, moviesData });
export default connect(mapState)(MoviesList);
