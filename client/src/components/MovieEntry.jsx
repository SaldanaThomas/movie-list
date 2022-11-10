import React from 'react';

const MovieEntry = (entry) => {
  return (
    <div className='movieEntry'>{entry.movie.title}
      <div>
          <button className='entryWatchButton' onClick={ () => entry.toggle(entry.movie)}>{entry.movie.watched === true ? 'Watched' : 'To Watch'}</button>
      </div>
    </div>
  );
};

export default MovieEntry;