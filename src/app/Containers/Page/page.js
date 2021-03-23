import React, { useState } from 'react';
import './style.css';
import Header from '../../Components/Header';
import MoviesList from '../../Components/MoviesList';
import Footer from '../../Components/Footer';
import * as allMovies from './movies.json';
import ModalWrap from '../../Components/ModalWrap';

export default function Page() {
  const defaultGenre = 'all';
  const selectors = [
    { value: 'release_date', view: 'release date' },
    { value: 'budget', view: 'budget' },
    { value: 'vote_average', view: 'vote average' },
    { value: 'vote_count', view: 'vote count' },
    { value: 'revenue', view: 'revenue' },
  ];
  const genresPossible = [
    { value: 'comedy', view: 'comedy' },
    { value: 'drama', view: 'drama' },
    { value: 'romance', view: 'romance' },
  ];
  const [movies, setMovies] = useState(allMovies);
  const [genreToSelect, setGenre] = useState(defaultGenre);
  const [selector, setSelector] = useState(selectors[0].value);

  const [isOpen, changeIsOpen] = useState(false);
  const [modalInner, changeModalInner] = useState(() => {});
  const [showMovieDescription, changeShowMovieDescription] = useState(false);
  const [movieDetails, changeMovieDetails] = useState({
    url: '',
    title: '',
    releaseDate: '',
    overview: '',
    runtime: '',
    voteAverage: '',
    tagline: '',
  });

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
        genresPossible={genresPossible}
        showMovieDescription={showMovieDescription}
        changeShowMovieDescription={changeShowMovieDescription}
        movieDetails={movieDetails}
      />
      <MoviesList
        movies={movies}
        setMovies={setMovies}
        genre={genreToSelect}
        setGenre={setGenre}
        selectors={selectors}
        selector={selector}
        setSelector={setSelector}
        genresPossible={genresPossible}
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
