import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import Search from '../Search';
import getAddModalInput from './addMovieInput';

const Header = ({ openModal, closeModal, changeModalInner, genresPossible }) => {
  const addInput = getAddModalInput(genresPossible, closeModal);
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
