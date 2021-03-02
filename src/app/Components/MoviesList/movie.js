import React from 'react';
import './style.css';

const Movie = ({ movieData }) => {
  const { url, title, genre, releaseDate } = movieData;
  return (
    <div className="movie">
      <p>{title}</p>
      <p>{genre}</p>
      <p>{releaseDate}</p>
    </div>
  );
};

export default Movie;
