import React from 'react';
import './style.css';

const Movie = ({ url, title, genre, releaseDate }) => {
  return (
    <div className="movie">
      <p>{title}</p>
      <p>{genre}</p>
      <p>{releaseDate}</p>
    </div>
  );
};

Movie.defaultProps = {
  url: 'url',
  title: 'Some title',
  genre: 'Some genre',
  releaseDate: '2022',
};

export default Movie;
