import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import Search from '../Search';
import MovieDetails from '../MovieDetailes';
import getAddModalInput from './addMovieInput';

const Header = ({
  openModal,
  closeModal,
  changeModalInner,
  genresPossible,
  showMovieDescription,
  changeShowMovieDescription,
  movieDetails
}) => {
  const addInput = getAddModalInput(genresPossible, closeModal);
  const prepareModal = (inputType) => () => {
    changeModalInner(inputType);
    openModal();
  };

  return (
    <header id="header">
      <div id="top-bar">
        <img src="" alt="netflixroulette" />
        {showMovieDescription ? (
          <button
            id="search-icon"
            onClick={() => changeShowMovieDescription(!showMovieDescription)}
          >
            {'\u2315'}
          </button>
        ) : (
          <button onClick={prepareModal(addInput)}>+ ADD MOVIE</button>
        )}
      </div>
      {showMovieDescription ? <MovieDetails movieDetails={movieDetails}/> : <Search />}
    </header>
  );
};

export default Header;
