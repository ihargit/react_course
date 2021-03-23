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
  changeShowMovieDescription,
  changeMovieDetails,
  movieDetails
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
          tagline,
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
            tagline={tagline}
            changeShowMovieDescription={changeShowMovieDescription}
            changeMovieDetails={changeMovieDetails}
            movieDetails={movieDetails}
          />
        );
      })}
    </div>
  );
};

export default Movies;
