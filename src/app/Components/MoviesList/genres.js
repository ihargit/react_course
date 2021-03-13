import React from 'react';
import './style.css';
import { v4 as uuidv4 } from 'uuid';

const MoviesGenres = ({ genres, selected, setGenre }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setGenre(e.target.value);
  }
  const getClassName = (genre) =>
    `genre-button${genre === selected ? ' genre-button-selected' : ''}`;
  const genresList = genres.map((genre) => (
    <li key={uuidv4()}>
      <button className={getClassName(genre)} onClick={handleClick} value={genre}>{genre}</button>
    </li>
  ));
  return (
    <>
      <ul id="genre-selector">{genresList}</ul>
    </>
  );
};

export default MoviesGenres;