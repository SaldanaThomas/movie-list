const {useState, useEffect} = React;
import React from 'react';

const MovieEntry = (entry) => {
  console.log(entry);
  return (
    <div className='movieEntry'>
      <div className='entry'>{entry.movie.title}
          <button className='entryToWatch' onClick={ () => entry.toggle(entry.movie)}>{entry.movie.watched === true ? 'Watched' : 'To Watch'}</button>
      </div>
    </div>
  );
};

export default MovieEntry;