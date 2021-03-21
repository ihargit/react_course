import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import Search from '../Search';

const Header = ({ openModal, closeModal, changeModalInner, genresPossible }) => {
  const addInput = () => (
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
          {genresPossible.map(({ value, view }) => (
            <option value={value} key={uuidv4()}>
              {view}
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
            closeModal(); // TODO implement movie add
          }}
        >
          SUBMIT
        </button>
      </div>
    </>
  );

  const prepareModal = (inputType) => () => {
    changeModalInner(inputType);
    openModal();
  };

  return (
    <header id="header">
      <div id="top-bar">
        <img src="" alt="netflixroulette" />
        <button onClick={prepareModal(addInput)}>+ ADD MOVIE</button>
      </div>
      <Search />
    </header>
  );
};

export default Header;
