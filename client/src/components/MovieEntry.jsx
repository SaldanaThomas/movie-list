import React from 'react';

const MovieEntry = ({movie} = movie) => {

  return (
    <div className='movie'>{movie.title}</div>
  );
};

export default MovieEntry;