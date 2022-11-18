import React from 'react';

const MovieDetails = ({data} = data) => {
  return (
    <div className='movieDetails'>
      <div>Year: {data.movie.year}</div>
      <div>Runtime: {data.movie.runTime}</div>
      <div>Metascore: {data.movie.metaScore}</div>
      <div>imdbRating: {data.movie.imdbRating}</div>
      <button className='entryWatchButton' onClick={() => data.toggle(data.movie)}>
        {data.movie.watched === true ? 'Watched' : 'To Watch'}
      </button>
    </div>
  );
}

export default MovieDetails;