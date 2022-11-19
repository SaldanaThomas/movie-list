import React from 'react';
import MovieEntry from './MovieEntry.jsx';

const MovieList = ({movies, toggle}) => {
  return (
    <div className='movieList'>{movies.map((movie, index) => <MovieEntry movie={movie} key={index} toggle={toggle}/>)}</div>
  );
};

export default MovieList;