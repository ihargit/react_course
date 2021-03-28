import React from 'react';
import { v4 as uuidV4 } from 'uuid';

function editAddModalInput({
  url,
  title,
  genre,
  id,
  releaseDate,
  closeModal,
  genresPossible,
  overview,
  runtime,
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
          defaultValue={genre}
          onChange={() => {}}
        >
          {genresPossible.map(({ value, view }) => (
            <option value={value} key={uuidV4()}>
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
}

function getDeleteModalInput({ id, closeModal }) {
  return () => (
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
}

export { editAddModalInput, getDeleteModalInput };
