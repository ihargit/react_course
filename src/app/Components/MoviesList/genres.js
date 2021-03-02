import React from 'react';
import './style.css';
import { v4 as uuidv4 } from 'uuid';

const MoviesGenres = ({ genres }) => {
  const genresList = genres.map((genre) => <li key={uuidv4()}>{genre}</li>);
  return (
    <>
      <ul className="genre-selector">{genresList}</ul>
    </>
  );
};

export default MoviesGenres;
