import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import './style.css';
import Search from '../Search';
import MovieDetails from '../MovieDetails';
import getAddModalInput from './addMovieInput';
import { GENRES_POSSIBLE, ICONS_CODES} from '../../Constants';

const Header = ({
  openModal,
  closeModal,
  changeModalInner,
  genresPossible,
  showMovieDescription,
  changeShowMovieDescription,
  movieDetails
}) => {
  const addInput = getAddModalInput(GENRES_POSSIBLE, closeModal);
  const prepareModal = (inputType) => () => {
    changeModalInner(inputType);
    openModal();
  };

  return (
    <header id="header">
      <div id="top-bar">
        <img src="" alt="netflix_roulette" />
        {showMovieDescription ? (
          <button
            id="search-icon"
            onClick={() => changeShowMovieDescription(!showMovieDescription)}
          >
            {ICONS_CODES.SEARCH}
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
