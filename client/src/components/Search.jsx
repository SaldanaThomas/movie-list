import React from 'react';

const Search = (data) => {

  return (
    <form>
    <input id='searchField' placeholder='Search...' type='text'></input>
    <button className='searchButton' onClick={data.search}>Go!</button>
    <a id='currentSearch'></a>
    </form>

  );
};

export default Search;