const actionTypes = {
  moviesFetchRequested: 'MOVIES_FETCH_REQUESTED',
  moviesFetchSucceeded: 'MOVIES_FETCH_SUCCEEDED',
  moviesFetchFailed: 'MOVIES_FETCH_FAILED',
  moviesSortSelectorSet: 'MOVIES_SORT_SELECTOR_SET',
  moviesGenreSet: 'MOVIES_GENRE_SET',
  modalRequested: 'MODAL_EDIT_REQUESTED',
  modalClosed: 'MODAL_CLOSED',
};

const actionCreators = {
  closeModal: () => ({
    type: actionTypes.modalClosed,
    payload: { isOpen: false },
  }),
  showModal: (args = {}) => ({
    type: actionTypes.modalRequested,
    payload: Object.assign({ isOpen: true }, args),
  }),
};

export { actionTypes, actionCreators };
