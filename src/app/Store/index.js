import { createStore } from 'redux';
import * as allMovies from '../../movies.json';
import rootReducer from './Reducers';

const store = createStore(rootReducer, { movies: allMovies });

export default store;
