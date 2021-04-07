import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { connect } from 'react-redux';

import './style.css';
import Search from '../Search';
import MovieDetails from '../MovieDetails';
import getAddModalInput from './addMovieInput';
import { ICONS_CODES, MODALS } from '../../Constants';
import { actionCreators } from '../../Store/Actions';
// import ModalWrap from '../../Components/ModalWrap';

const Header = ({
  filter: { genres },
  showMovieDescription,
  changeShowMovieDescription,
  movieDetails,
  dispatch,
}) => {
  const onModalOpen = () => {
    changeIsOpen(true);
  };
  const onModalClose = () => {
    changeIsOpen(false);
  };
  const addInput = getAddModalInput(genres, onModalClose);
  const [isOpen, changeIsOpen] = useState(false);
  const [modalInner, changeModalInner] = useState(() => {});
  const prepareModal = (inputType) => () => {
    changeModalInner(inputType);
    onModalOpen();
  };

  const addMovie = () =>
    dispatch(actionCreators.showModal({ mode: MODALS.add }));

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
            <button onClick={addMovie}>+ ADD MOVIE</button>
          )}
        </div>
        {showMovieDescription ? (
          <MovieDetails movieDetails={movieDetails} />
        ) : (
          <Search />
        )}
      </header>
      {/* <ModalWrap isOpen={isOpen} onClose={onModalClose}>
        <>{modalInner}</>
      </ModalWrap> */}
    </>
  );
};

const mapState = ({ filter }) => ({ filter });
export default connect(mapState)(Header);
