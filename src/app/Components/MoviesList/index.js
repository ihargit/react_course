import React, { useState } from 'react';
import './style.css';
import MoviesFound from './moviesFound';
import Movies from './movies';
import ModalWrap from '../ModalWrap';
import MoviesFilter from '../MoviesFilter';


const MoviesList = ({
  moviesData,
  genres,
  moviesNumber,
  genre,
  setGenre,
  selector,
  setSelector,
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
      <MoviesFilter
        genre={genre}
        genres={genres}
        selected={genre}
        setGenre={setGenre}
        setSelector={setSelector}
        selector={selector}
      />
      <div className="container-padding">
        <MoviesFound number={moviesNumber} />
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
