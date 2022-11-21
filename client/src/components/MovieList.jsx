import React from 'react';
import MovieEntry from './MovieEntry.jsx';

const MovieList = ({movies, toggle}) => {
  return (
    <div className='movieList'>{movies.length ? movies.map((movie, index) => <MovieEntry movie={movie} key={index} toggle={toggle}/>) : <img src="client/dist/ZC101cU.jpg"></img>}</div>
  );
};

export default MovieList;