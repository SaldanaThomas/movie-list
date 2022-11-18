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

const App = (props) => {
  const [movieData, setMovieData] = useState(data);
  const [filterData, setFilterData] = useState(movieData);

  //take user input for search criteria
  const searchMovies = () => {
    event.preventDefault();
    let input = document.getElementById('searchField').value.toLowerCase();
    generateSearchInnerText();
    filters.search = input;
    let matches = generateFilteredData(movieData);
    setFilterData(matches);
    if (matches.length === 0) {
      console.log('No matching videos!');
    }
  };

  const clearSearch = () => {``
    generateSearchInnerText(true);
    filters.search = '';
    setFilterData(generateFilteredData(movieData));
  }

  //add movie to database
  const addMovie = (event) => {
    event.preventDefault();
    let input = document.getElementById('addField').value;
    let addField = document.getElementById('addField');
    addField.value = '';
    let tempArray = movieData;
    if (input.length > 0) {
      tempArray.push({title: input, year: '?', runTime: '?', metaScore: '?', imdbRating: '?', watched: false, details: false});
      setMovieData(tempArray);
      tempArray = generateFilteredData(tempArray);
      setFilterData(tempArray);
    }
  };

  //display "To Watch" or "Watched" movies
  const watchList = (status) => {
    let watched = document.getElementById('watched');
    let toWatch = document.getElementById('toWatch');
    if (status) {
      watched.style.backgroundColor = 'gold';
      toWatch.style.backgroundColor = 'white';
    } else {
      watched.style.backgroundColor = 'white';
      toWatch.style.backgroundColor = 'gold';
    }
    filters.watched = status;
    let tempArray = generateFilteredData(movieData);
    setFilterData(tempArray);
  };

  //toggle movie between "To Watch" and "Watched"
  const toggleStatus = (movie) => {
    let tempArray = [];
    for (var i = 0; i < movieData.length; i++) {
      tempArray.push(movieData[i]);
      if (tempArray[i].title === movie.title) {
        tempArray[i].watched = !tempArray[i].watched;
      }
    }
    setMovieData(tempArray);
    setFilterData(generateFilteredData(tempArray));
  };

  //generate array based on current search criteria
  const generateFilteredData = (array) => {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
      if (filters.watched !== null) {
        if (array[i].watched === filters.watched) {
          if (array[i].title.toLowerCase().includes(filters.search)) {
            filteredArray.push(array[i]);
          }
        }
      } else {
        if (array[i].title.toLowerCase().includes(filters.search)) {
          filteredArray.push(array[i]);
        }
      }
    }
    return filteredArray;
  }

  //display search input on screen and clear search field
  const generateSearchInnerText = (clearSearch) => {
    let text = document.getElementById('searchField').value;
    let search = document.getElementById('currentSearch');
    if (clearSearch || text === '') {
      search.innerText = '';
    } else {
      search.innerText = `Currently Searching: "${text}"`;
    }
    let searchField = document.getElementById('searchField');
    searchField.value = '';
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
      <ul className='movies'><MovieList videos={filterData} toggle={toggleStatus}/></ul>
    </div>
  );
};

export default App;