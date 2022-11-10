import React from 'react';
import MovieEntry from './MovieEntry.jsx';

const MovieList = (movies) => {
  return (
    <div className='movieList'>{movies.videos.map((movie, index) => <MovieEntry movie={movie} key={index} toggle={movies.toggle}/>)}</div>
  );
};

export default MovieList;