import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import PropTypes from 'prop-types';

const MovieDetails = ({
  movieDetails: {
    url,
    title,
    releaseDate,
    overview,
    runtime,
    voteAverage,
    tagline,
  },
}) => {
  return (
    <div className="movie-detailes">
      <img className="movie-image" src={url} />
      <div className="movie-description">
        <div className="movie-detailes-header">
          <p className="movie-title">{title}</p>
          <span className="movie-vote">{voteAverage}</span>
        </div>
        <p className="movie-tagline">{tagline}</p>
        <p className="movie-release">
          {`${String(new Date(releaseDate).getFullYear())}  ${runtime} min`}
        </p>
        <p>{overview}</p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.string,
  releaseDate: PropTypes.string,
};

MovieDetails.defaultProps = {
  url: 'url',
  title: 'Some title',
  genre: 'Some genre',
  releaseDate: '2022',
  overview: 'overview',
  runtime: '100',
};

export default MovieDetails;
