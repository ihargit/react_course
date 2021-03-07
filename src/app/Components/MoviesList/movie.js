import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import ErrorBoundary from '../ErrorBoundary';
import Movies from './movies';

const Movie = ({ url, title, genre, releaseDate }) => {
  return (
    <ErrorBoundary>
      <div className="movie">
        <p>{title}</p>
        <p>{genre}</p>
        <p>{releaseDate}</p>
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
