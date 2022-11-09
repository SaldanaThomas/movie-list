import React from 'react';

const Movie = ({movie} = movie) => {

  return (
    <div className='movie'>{movie.title}</div>
  );
};

export default Movie;