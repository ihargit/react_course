import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import PropTypes from 'prop-types';

const MovieDetails = ({
  url,
  title,
  releaseDate,
  overview,
  runtime,
  voteAverage,
  tagline,
}) => {
  return (
    <div className="movie-detailes">
      <img className="movie-image" src={url} />
      <div className="movie-description">
        <div>
          <p className="movie-title">{title}</p>
          <div>{voteAverage}</div>
        </div>
        <p className="movie-tagline">{tagline}</p>
        <p>
          {`${String(new Date(releaseDate).getFullYear())}  ${runtime} min`}
        </p>
        <p>
          {overview}
        </p>
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
