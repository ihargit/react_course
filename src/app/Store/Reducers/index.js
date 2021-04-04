import { combineReducers } from 'redux';
import movies from '../Reducers/moviesReducer';
import filter from '../Reducers/moviesFilterReducer';

export default combineReducers({ movies, filter });
