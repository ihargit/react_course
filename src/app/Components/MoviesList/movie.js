import React, { useState } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import ErrorBoundary from '../ErrorBoundary';
import Movies from './movies';
import ModalWrap from '../ModalWrap';

const Movie = ({
  url,
  title,
  genre,
  releaseDate,
  openModal,
  changeModalInner,
}) => {
  const [hidden, setHidden] = useState('hide');
  const toggleHidden = () => setHidden(hidden ? '' : 'hide');

  const editInput = () => (
    <form>
      <label for="fname">Edit</label>
    </form>
  );

  const deleteInput = () => (
    <form>
      <label for="fname">Delete</label>
    </form>
  );

  const prepareModal = (inputType) => () => {
    changeModalInner(inputType);
    openModal();
  };

  return (
    <ErrorBoundary>
      <div className="movie">
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
          <div className="movie-release-date">{releaseDate}</div>
        </div>
        <p className="movie-genre">{genre}</p>
      </div>
    </ErrorBoundary>
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
