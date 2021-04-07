import { combineReducers } from 'redux';
import movies from './movies';
import filter from './filter';
import modal from './modal';

export default combineReducers({ movies, filter, modal });
