import React from 'react';
import MovieDetails from './MovieDetails.jsx';

const MovieEntry = (data) => {
  return (
    <div className='movieEntry'>
      <h3 className='movieTitle' onClick={ () => data.toggle(data.movie, 'details')}>
        {data.movie.title}
      </h3>
      <div>{data.movie.details && <MovieDetails data={data}/>}</div>
    </div>
  );
};

export default MovieEntry;