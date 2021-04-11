import React, { useState } from 'react';
import './style.css';
import PropTypes from 'prop-types';

const MovieCard = ({
  movieData: {
    poster_path: url,
    title,
    genres = [],
    release_date: releaseDate,
    id,
    overview,
    runtime,
    vote_average: voteAverage,
    tagline,
  },
  showMovie,
  deleteMovie,
  editMovie,
}) => {
  const [hidden, setHidden] = useState('hide');
  const toggleHidden = () => setHidden(hidden ? '' : 'hide');

  return (
    <div className="movie" onClick={() => showMovie(id)}>
      <button
        className="movie-three-dots-icon hide"
        onClick={toggleHidden}
      ></button>
      <div className={`movie-three-dots-menu ${hidden}`}>
        <button className="close-menu-button" onClick={toggleHidden}>
          x
        </button>
        <button className="edit-button" onClick={() => editMovie(id)}>
          Edit
        </button>
        <button className="delete-button" onClick={() => deleteMovie(id)}>
          Delete
        </button>
      </div>
      <img className="movie-image" src={url} />
      <div className="movie-description">
        <p className="movie-title">{title}</p>
        <div className="movie-release-date">
          {String(new Date(releaseDate).getFullYear())}
        </div>
      </div>
      <p className="movie-genre">{genres.join(', ')}</p>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.string,
  releaseDate: PropTypes.string,
};

MovieCard.defaultProps = {
  url: 'url',
  title: 'Some title',
  genre: 'Some genre',
  releaseDate: '2022',
};

export default MovieCard;
