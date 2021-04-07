import React from 'react';
import { v4 as uuidV4 } from 'uuid';

export default function getAddMovieInput(genres, closeModal) {
  return () => (
    <>
      <h4>ADD MOVIE</h4>
      <form id="add-movie-form">
        <label>TITLE</label>
        <br />
        <input type="text" id="title" name="title"></input>
        <br />
        <label>RELEASE DATE</label>
        <br />
        <input type="date" id="releaseDate" name="releaseDate"></input>
        <br />
        <label>MOVIE URL</label>
        <br />
        <input type="text" id="movieUrl" name="movieUrl"></input>
        <br />
        <label>GENRE</label>
        <br />
        <select id="genre" name="genre" onChange={() => {}}>
          {genres.map((value) => (
            <option value={value} key={uuidV4()}>
              {value}
            </option>
          ))}
        </select>
        <br />
        <label>OVERVIEW</label>
        <br />
        <textarea id="overview" name="overview"></textarea>
        <br />
        <label>RUNTIME</label>
        <br />
        <input type="text" id="runtime" name="runtime"></input>
        <br />
      </form>
      <div className="modal-buttons">
      <button
          className="button"
          onClick={(id) => {
            document.getElementById("add-movie-form").reset();
          }}
        >
          RESET
        </button>
        <button
          className="button red"
          onClick={(id) => {
            closeModal(); // TODO add new movie
          }}
        >
          SUBMIT
        </button>
      </div>
    </>
  );
}