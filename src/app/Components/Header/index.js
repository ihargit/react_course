import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { connect } from 'react-redux';

import './style.css';
import Search from '../Search';
import MovieDetails from '../MovieDetails';
import { ICONS_CODES, MODALS } from '../../Constants';
import { actionCreators } from '../../Store/Actions';

const Header = ({ filter: { genres }, movie, moviesData, dispatch }) => {
  const onModalOpen = () => {
    changeIsOpen(true);
  };
  const onModalClose = () => {
    changeIsOpen(false);
  };

  const addMovie = () =>
    dispatch(actionCreators.showModal({ mode: MODALS.add }));
  const closeMovie = () =>
    dispatch(actionCreators.closeMovie({ isOpen: false }));

  return (
    <>
      <header id="header">
        <div id="top-bar">
          <img src="" alt="netflix_roulette" />
          {movie.isOpen ? (
            <button
              id="search-icon"
              onClick={closeMovie}
            >
              {ICONS_CODES.SEARCH}
            </button>
          ) : (
            <button onClick={addMovie}>+ ADD MOVIE</button>
          )}
        </div>
        {movie.isOpen ? (
          <MovieDetails movieDetails={movie.details} />
        ) : (
          <Search />
        )}
      </header>
    </>
  );
};

const mapState = ({ filter, movie, movies: { data: moviesData } }) => ({
  filter,
  movie,
  moviesData,
});
export default connect(mapState)(Header);