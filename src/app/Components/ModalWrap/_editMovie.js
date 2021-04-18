import React from 'react';
import { v4 as uuidV4 } from 'uuid';

export default function getEditMovieInput({
  movie: {
    poster_path: url,
    title,
    genres: movieGenres,
    id,
    release_date: releaseDate,
    overview,
    runtime,
  },
  genres,
  closeModal,
  dispatch,
  actionCreators,
}) {
  return () => (
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
        <select
          id="genre"
          name="genre"
          defaultValue={movieGenres}
          onChange={() => {}}
          multiple
        >
          {genres.map((value) => (
            <option value={value} key={uuidV4()}>
              {value}
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
          onClick={() => {
            dispatch(actionCreators.editMovie(id)); // TODO send something other to edit
            closeModal();
          }}
        >
          SAVE
        </button>
      </div>
    </>
  );
}
