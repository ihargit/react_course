import React from 'react';
import './style.css';
import { v4 as uuidV4 } from 'uuid';
import { GENRES_ALL } from '../../Constants';

const MoviesGenres = ({ genres, selected, setGenre }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setGenre(e.target.value);
  };
  const getClassName = (genre) =>
    `genre-button${genre === selected ? ' genre-button-selected' : ''}`;
  const genresList = [GENRES_ALL].concat(genres).map((genre) => (
    <li key={uuidV4()}>
      <button
        className={getClassName(genre)}
        onClick={handleClick}
        value={genre}
      >
        {genre}
      </button>
    </li>
  ));
  return (
    <>
      <ul id="genre-selector">{genresList}</ul>
    </>
  );
};

export default MoviesGenres;
