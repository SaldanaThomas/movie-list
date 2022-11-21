import React from 'react';

const Search = ({search}) => {

  return (
    <form>
    <input id='searchField' placeholder='Search...' type='text'></input>
    <button className='searchButton' onClick={search}>Go!</button>
    <a id='currentSearch'></a>
    </form>
  );
};

export default Search;