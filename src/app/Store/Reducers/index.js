import { combineReducers } from 'redux';
import moviesReducer from '../Reducers/moviesReducer';

export default combineReducers({ movies: moviesReducer });
