import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import ErrorBoundary from '../ErrorBoundary';
import Movies from './movies';

const Movie = ({ url, title, genre, releaseDate }) => {
  return (
    <ErrorBoundary>
      <div className="movie">
        <img className="movie-image" src={url}/>
        <p className="movie-title">{title}</p>
        <p className="release-date">{releaseDate}</p>
        <p>{genre}</p>
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
