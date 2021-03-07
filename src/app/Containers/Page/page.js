import React, { Component } from 'react';
import './style.css';
import Header from '../../Components/Header';
import MoviesList from '../../Components/MoviesList';
import Footer from '../../Components/Footer';
import * as movies from './movies.json';

export default function Page() {
  return (
    <>
      <Header />
      <MoviesList movies={movies} />
      <Footer />
    </>
  );
}
