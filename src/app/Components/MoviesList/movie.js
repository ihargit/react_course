import React, { useState, useRef, useCallback, useEffect } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import Movies from './movies';
import ModalWrap from '../ModalWrap';
import { editAddModalInput, getDeleteModalInput } from './moviesModalsInputs';
import { GENRES_POSSIBLE } from '../../Constants';

const Movie = ({
  url,
  title,
  genre,
  id,
  releaseDate,
  openModal,
  closeModal,
  changeModalInner,
  overview,
  runtime,
  voteAverage,
  tagline,
  changeShowMovieDescription,
  changeMovieDetails,
  movieDetails,
}) => {
  const [hidden, setHidden] = useState('hide');
  const toggleHidden = () => setHidden(hidden ? '' : 'hide');
  const editInput = editAddModalInput({
    url,
    title,
    genre,
    id,
    releaseDate,
    closeModal,
    genresPossible: GENRES_POSSIBLE,
    overview,
    runtime,
  });

  const deleteInput = getDeleteModalInput({ id, closeModal });

  const prepareModal = (inputType) => () => {
    changeModalInner(inputType);
    openModal();
  };

  const movieEl = useRef();
  const onEvent = (e) => {
    if (
      movieEl.current.contains(e.target) &&
      e.target.className === 'movie-image'
    ) {
      changeMovieDetails((prevState) => ({
        ...prevState,
        ...{
          url,
          title,
          releaseDate,
          overview,
          runtime,
          voteAverage,
          tagline,
        },
      }));
      changeShowMovieDescription(true);
    }
  };
  useEffect(() => {
    window.addEventListener('mouseup', onEvent);
    return () => window.removeEventListener('mouseup', onEvent);
  }, [onEvent]);

  return (
    <div className="movie" ref={movieEl}>
      <button
        className="movie-three-dots-icon hide"
        onClick={toggleHidden}
      ></button>
      <div className={`movie-three-dots-menu ${hidden}`}>
        <button className="close-menu-button" onClick={toggleHidden}>
          x
        </button>
        <button className="edit-button" onClick={prepareModal(editInput)}>
          Edit
        </button>
        <button className="delete-button" onClick={prepareModal(deleteInput)}>
          Delete
        </button>
      </div>
      <img className="movie-image" src={url} />
      <div className="movie-description">
        <p className="movie-title">{title}</p>
        <div className="movie-release-date">
          {String(new Date(releaseDate).getFullYear())}
        </div>
      </div>
      <p className="movie-genre">{genre}</p>
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.string,
  releaseDate: PropTypes.string,
};

Movie.defaultProps = {
  url: 'url',
  title: 'Some title',
  genre: 'Some genre',
  releaseDate: '2022',
};

export default Movie;
