import React, { useState } from 'react';
import { connect } from 'react-redux';
import './style.css';
import MoviesFound from './moviesFound';
import Movies from './movies';
import ModalWrap from '../ModalWrap';
import MoviesFilter from '../MoviesFilter';

const MoviesList = ({
  moviesData,
  changeShowMovieDescription,
  changeMovieDetails,
  movieDetails,
}) => {
  const onModalOpen = () => {
    changeIsOpen(true);
  };
  const onModalClose = () => {
    changeIsOpen(false);
  };
  const [isOpen, changeIsOpen] = useState(false);
  const [modalInner, changeModalInner] = useState(() => {});
  return (
    <>
      <MoviesFilter />
      <div className="container-padding">
        <MoviesFound number={moviesData.length} />
      </div>
      <div className="container-padding flex-grow-10">
        <Movies
          data={moviesData}
          openModal={onModalOpen}
          closeModal={onModalClose}
          changeModalInner={changeModalInner}
          changeShowMovieDescription={changeShowMovieDescription}
          changeMovieDetails={changeMovieDetails}
          movieDetails={movieDetails}
        />
      </div>
      <ModalWrap isOpen={isOpen} onClose={onModalClose}>
        <>{modalInner}</>
      </ModalWrap>
    </>
  );
};

export default MoviesList;
