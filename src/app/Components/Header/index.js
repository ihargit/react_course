import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import './style.css';
import Search from '../Search';
import MovieDetails from '../MovieDetails';
import getAddModalInput from './addMovieInput';
import { GENRES_POSSIBLE, ICONS_CODES } from '../../Constants';
import ModalWrap from '../../Components/ModalWrap';

const Header = ({
  genresPossible,
  showMovieDescription,
  changeShowMovieDescription,
  movieDetails,
}) => {
  const onModalOpen = () => {
    changeIsOpen(true);
  };
  const onModalClose = () => {
    changeIsOpen(false);
  };
  const addInput = getAddModalInput(GENRES_POSSIBLE, onModalClose);
  const [isOpen, changeIsOpen] = useState(false);
  const [modalInner, changeModalInner] = useState(() => {});
  const prepareModal = (inputType) => () => {
    changeModalInner(inputType);
    onModalOpen();
  };

  return (
    <>
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
        {showMovieDescription ? (
          <MovieDetails movieDetails={movieDetails} />
        ) : (
          <Search />
        )}
      </header>
      <ModalWrap isOpen={isOpen} onClose={onModalClose}>
        <>{modalInner}</>
      </ModalWrap>
    </>
  );
};

export default Header;
