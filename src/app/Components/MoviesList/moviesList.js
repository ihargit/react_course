import React from 'react';
import './style.css';
import { v4 as uuidv4 } from 'uuid';
import MoviesListControls from './controls';

const getGenres = (moviesData) => {
  const genres = { all: true };
  moviesData.forEarch(({ genres }) =>
    genres.forEarch((genre) => {
      if (!genres[genre]) {
        genres[genre] = true;
      }
    })
  );
  return Object.keys(genres);
};

const MoviesList = ({ movies }) => {
  // const genres = getGenres(movies.data);
  return (
    <>
      {/* <MoviesListControls genres={genres} /> */}
      {movies.data.map(({ title }) => (
        <p key={uuidv4()}>Title: {title}</p>
      ))}
    </>
  );
};

export default MoviesList;
