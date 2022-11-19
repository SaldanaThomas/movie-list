import React from 'react';
import MovieDetails from './MovieDetails.jsx';

const MovieEntry = ({movie, toggle}) => {
  return (
    <div className='movieEntry'>
      <h3 className='movieTitle' onClick={ () => toggle(movie, 'details')}>
        {movie.title}
      </h3>
      <div>{movie.details && <MovieDetails movie={movie} toggle={toggle}/>}</div>
    </div>
  );
};

export default MovieEntry;