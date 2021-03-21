import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import PropTypes from 'prop-types';
import ErrorBoundary from '../ErrorBoundary';
import Movies from './movies';
import ModalWrap from '../ModalWrap';

const Movie = ({
  url,
  title,
  genre,
  id,
  releaseDate,
  openModal,
  closeModal,
  changeModalInner,
  genresPossible,
  overview,
  runtime,
}) => {
  const [hidden, setHidden] = useState('hide');
  const toggleHidden = () => setHidden(hidden ? '' : 'hide');

  const editInput = () => (
    <>
      <h4>EDIT MOVIE</h4>
      <form>
        <label>MOVIE ID</label>
        <p>{id}</p>
        <label>TITLE</label>
        <br />
        <input type="text" defaultValue={title} id="title" name="title"></input>
        <br />
        <label>RELEASE DATE</label>
        <br />
        <input
          type="date"
          defaultValue={releaseDate}
          id="releaseDate"
          name="releaseDate"
        ></input>
        <br />
        <label>MOVIE URL</label>
        <br />
        <input
          type="text"
          defaultValue="www.url.com"
          id="movieUrl"
          name="movieUrl"
        ></input>
        <br />
        <label>GENRE</label>
        <br />
        <select id="genre" name="genre" defaultValue={genre} onChange={()=>{}}>
          {genresPossible.map(({ value, view }) => (
            <option value={value} key={uuidv4()}>
              {view}
            </option>
          ))}
        </select>
        <br />
        <label>OVERVIEW</label>
        <br />
        <textarea
          defaultValue={overview}
          id="overview"
          name="overview"
        ></textarea>
        <br />
        <label>RUNTIME</label>
        <br />
        <input
          type="text"
          defaultValue={runtime}
          id="runtime"
          name="runtime"
        ></input>
        <br />
      </form>
      <div className="modal-buttons">
        <button
          className="button red"
          onClick={(id) => {
            closeModal(); // TODO implement movie deletion
          }}
        >
          SAVE
        </button>
      </div>
    </>
  );

  const deleteInput = () => (
    <>
      <p>DELETE MOVIE</p>
      <p>Are you sure you want to delete this movie?</p>
      <div className="modal-buttons">
        <button
          className="button red"
          onClick={(id) => {
            closeModal(); // TODO implement movie deletion
          }}
        >
          CONFIRM
        </button>
      </div>
    </>
  );

  const prepareModal = (inputType) => () => {
    changeModalInner(inputType);
    openModal();
  };

  return (
    <ErrorBoundary>
      <div className="movie">
        <button
          className="movie-three-dots-icon hide"
          onClick={toggleHidden}
        ></button>
        <div className={`movie-three-dots-menu ${hidden}`}>
          <button className="close-menu-button" onClick={toggleHidden}>
            x
          </button>
          <button className="edit-button" onClick={prepareModal(editInput)}>
            Edit
          </button>
          <button className="delete-button" onClick={prepareModal(deleteInput)}>
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
        <p className="movie-genre">{genre}</p>
      </div>
    </ErrorBoundary>
  );
};

Movie.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.string,
  releaseDate: PropTypes.string,
};

Movie.defaultProps = {
  url: 'url',
  title: 'Some title',
  genre: 'Some genre',
  releaseDate: '2022',
};

export default Movie;
