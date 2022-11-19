import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';

const {useState, useEffect} = React;

const data = [
  {title: 'Mean Girls', year: 2004, runTime: 94, metaScore: 85, imdbRating: 79, watched: false, details: false},
  {title: 'Hackers', year: 1998, runTime: 92, metaScore: 75, imdbRating: 64, watched: false, details: false},
  {title: 'The Grey', year: 2011, runTime: 105, metaScore: 90, imdbRating: 86, watched: false, details: false},
  {title: 'Sunshine', year: 2009, runTime: 124, metaScore: 95, imdbRating: 92, watched: false, details: false},
  {title: 'Ex Machina', year: 1993, runTime: 110, metaScore: 92, imdbRating: 92, watched: false, details: false},
];

const filters = {watched: false, search: ''};

const App = () => {
  const [movieData, setMovieData] = useState(data);
  const [filterData, setFilterData] = useState(movieData);

  // take user input for search criteria
  const searchMovies = () => {
    event.preventDefault();
    filters.search = document.getElementById('searchField').value.toLowerCase();
    displaySearchCriteria();
    setFilterData(generateFilteredData());
    if (!filterData.length) {
      console.log('No matching videos!');
    }
  };

  //reset search criteria
  const clearSearch = () => {
    displaySearchCriteria(false);
    filters.search = '';
    setFilterData(generateFilteredData());
  }

  //add movie to database
  const addMovie = () => {
    event.preventDefault();
    const input = document.getElementById('addField').value;
    if (input) {
      document.getElementById('addField').value = '';
      movieData.push({title: input, year: '?', runTime: '?', metaScore: '?', imdbRating: '?', watched: false, details: false});
      setMovieData(movieData);
      setFilterData(generateFilteredData());
    }
  };

  //view "To Watch" or "Watched" movies
  const watchList = (status) => {
    let watched = document.getElementById('watched');
    let toWatch = document.getElementById('toWatch');
    watched.style.backgroundColor = status ? 'gold' : 'white';
    toWatch.style.backgroundColor = status ? 'white' : 'gold';
    filters.watched = status;
    setFilterData(generateFilteredData());
  };

  //toggle movie property between true and false used for "watched/details"
  const toggleStatus = (clickedMovie, property) => {
    movieData.forEach(movie => {
      if (clickedMovie.title === movie.title) {
        movie[property] = !movie[property];
      }
    })
    setMovieData(movieData);
    setFilterData(generateFilteredData());
  };

  //generate new array based on current search criteria
  const generateFilteredData = (filtered = []) => {
    movieData.forEach(movie => {
      if (movie.title.toLowerCase().includes(filters.search)) {
        if (filters.watched === null || filters.watched === movie.watched) {
          filtered.push(movie);
        }
      }
    })
    return filtered;
  }

  //display search input on screen and clear search field
  const displaySearchCriteria = (showSearch) => {
    let text = document.getElementById('searchField').value;
    let search = document.getElementById('currentSearch');
    search.innerText = showSearch || text ? `Currently Searching: "${text}"` : '';
    document.getElementById('searchField').value = '';
  }

  return (
    <div>
      <div className='banner'><h1><em>Movie List</em></h1></div>
      <div><Add add={addMovie}/></div>
      <div><Search search={searchMovies}/></div>
      <div>
        <button id='watched' onClick={() => watchList(true)}> Watched </button>
        <button id='toWatch' onClick={() => watchList(false)}> To Watch </button>
        {filters.search !== '' && <button onClick={() => clearSearch()}>Clear</button>}
      </div>
      <ul className='movies'><MovieList movies={filterData} toggle={toggleStatus}/></ul>
    </div>
  );
};

export default App;