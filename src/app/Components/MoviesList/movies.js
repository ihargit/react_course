import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import './style.css';
import MovieCard from '../MovieCard';

const Movies = ({
  data,
  changeShowMovieDescription,
  changeMovieDetails,
  movieDetails,
  deleteMovie,
  editMovie,
}) => {
  return (
    <div className="movies">
      {data.map((movieData) => {
        return (
          <MovieCard
            key={uuidV4()}
            movieData={movieData}
            changeShowMovieDescription={changeShowMovieDescription}
            changeMovieDetails={changeMovieDetails}
            movieDetails={movieDetails}
            deleteMovie={deleteMovie}
            editMovie={editMovie}
          />
        );
      })}
    </div>
  );
};

export default Movies;
