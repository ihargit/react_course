import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import './style.css';
import MovieCard from '../MovieCard';

const Movies = ({
  data,
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
          <MovieCard
            key={uuidV4()}
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
