import React, { useState } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import ErrorBoundary from '../ErrorBoundary';
import Movies from './movies';

const Movie = ({ url, title, genre, releaseDate }) => {
  const [hidden, setHidden] = useState('hide');
  const toggleHidden = () => setHidden( hidden ? '' : 'hide');
  return (
    <ErrorBoundary>
      <div className="movie">
        <button className="movie-three-dots-icon hide" onClick={toggleHidden}></button>
        <div className={`movie-three-dots-menu ${hidden}`}>
          <button>x</button>
          <button>Edit</button>
          <button>Delete</button>
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
