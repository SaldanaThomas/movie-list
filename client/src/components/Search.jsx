import React from 'react';

const Search = (data) => {

  return (
    <form>
    <input id='search' placeholder='Search...' type='text'></input>
    <button className='searchButton' onClick={data.search}>Go!</button>
    </form>

  );
};

export default Search;