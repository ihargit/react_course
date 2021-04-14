import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import { MODALS } from '../../Constants';
import getAddMovieInput from './addMovie';
import getDeleteMovieInput from './deleteMovie';
import getEditMovieInput from './editMovie';
import { actionCreators } from '../../Store/Actions';

const ModalWrap = ({
  isOpen,
  movieId,
  moviesData = [],
  mode,
  genres,
  onClose,
  dispatch,
}) => {
  const closeModal = () => dispatch(actionCreators.closeModal());
  

  let getModalContent;
  switch (mode) {
    case MODALS.add:
      getModalContent = getAddMovieInput(genres, closeModal);
      break;
    case MODALS.edit:
      const movie = moviesData.find((data) => data.id === movieId);
      getModalContent = getEditMovieInput({ movie, genres, closeModal });
      break;
    case MODALS.delete:
      getModalContent = getDeleteMovieInput(movieId, closeModal);
      break;
    default:
      getModalContent = getAddMovieInput(genres, closeModal);
  }

  return (
    <div className="modal-wrap" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-content">
        <div className="modal-header">
          <button className="modal-close-button" onClick={closeModal}>
            x
          </button>
        </div>
        {getModalContent()}
      </div>
    </div>
  );
};

const mapState = ({
  movies: { data: moviesData },
  modal: { isOpen, movieId, mode },
  filter: { genres },
}) => ({ isOpen, movieId, mode, genres, moviesData });
export default connect(mapState)(ModalWrap);
