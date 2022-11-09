import React from 'react';
import MovieEntry from './MovieEntry.jsx';

const MovieList = (movies) => {

  return (
    <div className='movie'>{movies.videos.map((movie, index) => <MovieEntry movie={movie} key={index}/>)}</div>
  );
};

export default MovieList;