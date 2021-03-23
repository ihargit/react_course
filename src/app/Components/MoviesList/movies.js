import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import Movie from './movie';

const Movies = ({
  data,
  genresPossible,
  openModal,
  closeModal,
  changeModalInner,
  changeShowMovieDescription
}) => {

  return (
    <div className="movies">
      {data.map((movieData) => {
        const {
          url,
          title,
          genre,
          releaseDate,
          id,
          overview,
          runtime,
          voteAverage,
        } = movieData;
        return (
          <Movie
            key={uuidv4()}
            url={url}
            title={title}
            id={id}
            genre={genre}
            overview={overview}
            runtime={runtime}
            releaseDate={releaseDate}
            openModal={openModal}
            closeModal={closeModal}
            changeModalInner={changeModalInner}
            genresPossible={genresPossible}
            voteAverage={voteAverage}
            changeShowMovieDescription={changeShowMovieDescription}
          />
        );
      })}
    </div>
  );
};

export default Movies;
