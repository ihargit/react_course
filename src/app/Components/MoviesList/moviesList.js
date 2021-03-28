import React, { useState } from 'react';
import './style.css';
import MoviesGenres from './genres';
import MoviesFound from './moviesFound';
import SortBySelector from './sortSelector';
import Movies from './movies';
import ModalWrap from '../../Components/ModalWrap';
import {
  getGenres,
  getMoviesToDisplayData,
  getMoviesToDisplay,
} from '../../Utils';

const MoviesList = ({
  movies,
  genre,
  setGenre,
  selector,
  setSelector,
  selectors,
  changeShowMovieDescription,
  changeMovieDetails,
  movieDetails,
}) => {
  const moviesToDisplay = getMoviesToDisplay(movies.data, genre, selector);
  const genres = getGenres(moviesToDisplay);
  const moviesNumber = moviesToDisplay.length;
  const moviesToDisplayData = getMoviesToDisplayData(moviesToDisplay);
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
      <div className="container-padding flex">
        <MoviesGenres genres={genres} selected={genre} setGenre={setGenre} />
        <SortBySelector
          setSelector={setSelector}
          selectors={selectors}
          selector={selector}
        />
      </div>
      <div className="container-padding">
        <MoviesFound number={moviesNumber} />
      </div>
      <div className="container-padding flex-grow-10">
        <Movies
          data={moviesToDisplayData}
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
