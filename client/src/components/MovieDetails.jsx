import React from 'react';

const MovieDetails = ({movie, toggle}) => {
  return (
    <div className='movieDetails'>
      <div>Year: {movie.year}</div>
      <div>Runtime: {movie.runTime}</div>
      <div>Metascore: {movie.metaScore}</div>
      <div>imdbRating: {movie.imdbRating}</div>
      <button className='movieWatchButton' onClick={() => toggle(movie, 'watched')}>
        {movie.watched === true ? 'Watched' : 'To Watch'}
      </button>
    </div>
  );
}

export default MovieDetails;