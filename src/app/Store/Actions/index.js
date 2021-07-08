const actionTypes = {
  moviesFetchRequested: 'MOVIES_FETCH_REQUESTED',
  moviesFetchSucceeded: 'MOVIES_FETCH_SUCCEEDED',
  moviesFetchFailed: 'MOVIES_FETCH_FAILED',
  moviesSortSelectorSet: 'MOVIES_SORT_SELECTOR_SET',
  moviesGenreSet: 'MOVIES_GENRE_SET',
  modalRequested: 'MODAL_EDIT_REQUESTED',
  modalClosed: 'MODAL_CLOSED',
  movieFetchRequested: 'MOVIE_FETCH_REQUESTED',
  movieFetchSucceeded: 'MOVIE_FETCH_SUCCEEDED',
  movieFetchFailed: 'MOVIE_FETCH_FAILED',
  movieClosed: 'MOVIE_CLOSED',
  movieDeletionRequested: 'MOVIE_DELETION_REQUESTED',
  movieEditingRequested: 'MOVIE_EDITING_REQUESTED',
  movieAdditionRequested: 'MOVIE_ADDITION_REQUESTED',
  movieAdditionFailed: 'MOVIE_ADDITION_FAILED',
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
  showMovie: (id) => ({
    type: actionTypes.movieFetchRequested,
    payload: { isOpen: true, movieId: id },
  }),
  closeMovie: () => ({
    type: actionTypes.movieClosed,
    payload: { isOpen: false },
  }),
  deleteMovie: (id) => ({
    type: actionTypes.movieDeletionRequested,
    payload: { movieId: id },
  }),
  editMovie: (movieData) => ({
    type: actionTypes.movieEditingRequested,
    payload: { movieData: movieData },
  }),
  addMovie: (movieData) => ({
    type: actionTypes.movieAdditionRequested,
    payload: { movieData: movieData },
  }),
};

export { actionTypes, actionCreators };
