import { combineReducers } from 'redux';
import movies from './movies';
import filter from './filter';
import modal from './modal';
import movie from './movie';

export default combineReducers({ movies, filter, modal, movie });
