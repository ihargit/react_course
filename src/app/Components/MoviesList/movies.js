import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import Movie from './movie';
import ModalWrap from '../ModalWrap';

const Movies = ({ data }) => {
  const [isMovieMenuModalOpen, changeIsMovieMenuModalOpen] = useState(false);
  const [modalInner, changeModalInner] = useState(() => {});

  const onMovieMenuModalOpen = () => {
    changeIsMovieMenuModalOpen(true);
  };
  const onMovieMenuModalClose = () => {
    changeIsMovieMenuModalOpen(false);
  };

  return (
    <div className="movies">
      {data.map((movieData) => {
        const { url, title, genre, releaseDate } = movieData;
        return (
          <Movie
            key={uuidv4()}
            url={url}
            title={title}
            genre={genre}
            releaseDate={releaseDate}
            openModal={onMovieMenuModalOpen}
            changeModalInner={changeModalInner}
          />
        );
      })}
      <ModalWrap
        isOpen={isMovieMenuModalOpen}
        onModalClose={onMovieMenuModalClose}
      >
        <>{modalInner}</>
      </ModalWrap>
    </div>
  );
};

export default Movies;
