import React, { useState } from 'react';
import './style.css';
import Header from '../../Components/Header';
import MoviesList from '../../Components/MoviesList';
import Footer from '../../Components/Footer';
import * as allMovies from './movies.json';
import ModalWrap from '../../Components/ModalWrap';
import { DEFAULT_GENRE, DEFAULT_MOVIE_DETAILS, SELECTORS } from '../../Constants';

export default function Page() {
  const [movies, setMovies] = useState(allMovies);
  const [genreToSelect, setGenre] = useState(DEFAULT_GENRE);
  const [selector, setSelector] = useState(SELECTORS[0].value);

  const [isOpen, changeIsOpen] = useState(false);
  const [modalInner, changeModalInner] = useState(() => {});
  const [showMovieDescription, changeShowMovieDescription] = useState(false);
  const [movieDetails, changeMovieDetails] = useState(DEFAULT_MOVIE_DETAILS);

  const onModalOpen = () => {
    changeIsOpen(true);
  };
  const onModalClose = () => {
    changeIsOpen(false);
  };

  return (
    <>
      <Header
        openModal={onModalOpen}
        closeModal={onModalClose}
        changeModalInner={changeModalInner}
        showMovieDescription={showMovieDescription}
        changeShowMovieDescription={changeShowMovieDescription}
        movieDetails={movieDetails}
      />
      <MoviesList
        movies={movies}
        setMovies={setMovies}
        genre={genreToSelect}
        setGenre={setGenre}
        selectors={SELECTORS}
        selector={selector}
        setSelector={setSelector}
        openModal={onModalOpen}
        closeModal={onModalClose}
        changeModalInner={changeModalInner}
        changeShowMovieDescription={changeShowMovieDescription}
        changeMovieDetails={changeMovieDetails}
        movieDetails={movieDetails}
      />
      <ModalWrap isOpen={isOpen} onClose={onModalClose}>
        <>{modalInner}</>
      </ModalWrap>
      <Footer />
    </>
  );
}
