import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';
import axios from 'axios';
const {useState, useEffect} = React;

const App = () => {
  const [movieData, setMovieData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');
  const [watched, setWatched] = useState(false)
  const [reRender, setReRender] = useState(false);

  //retrive movies from database upon launch
  useEffect(() => {
    axios.get('http://localhost:3000/api/movies')
    .then(({data}) => setMovieData(data))
    .then(() => setFilterData(generateFilteredData()))
    .catch((err) => console.log(err))
  }, [reRender, filterData]);

  // take user input for search criteria
  const searchMovies = () => {
    event.preventDefault();
    setSearch(document.getElementById('searchField').value.toLowerCase());
    displaySearchCriteria();
    setFilterData(generateFilteredData());
  };

  //reset search criteria
  const clearSearch = () => {
    displaySearchCriteria(false);
    setSearch('');
    setFilterData(generateFilteredData());
  }

  //add movie to database
  const addMovie = () => {
    event.preventDefault();
    const input = document.getElementById('addField').value;
    if (input) {
      document.getElementById('addField').value = '';
      const movie = {title: input, year: 0, runTime: 0, metaScore: 0, imdbRating: 0, watched: false, details: false};
      axios.post('http://localhost:3000/api/movies', movie)
      .then((data) => setReRender(!reRender))
      .catch((err) => console.log(err))
    }
  };

  //view "To Watch" or "Watched" movies
  const watchList = (status) => {
    let watched = document.getElementById('watched');
    let toWatch = document.getElementById('toWatch');
    watched.style.backgroundColor = status ? 'gold' : 'white';
    toWatch.style.backgroundColor = status ? 'white' : 'gold';
    setWatched(status);
    setFilterData(generateFilteredData());
  };

  //toggle movie property between true and false used for "watched/details"
  const toggleStatus = (movie, property) => {
    movie.data = property;
    axios.patch('http://localhost:3000/api/movies', movie)
    .then((data) => {
      setReRender(!reRender);
    })
    .catch((err) => console.log(err));
  };

  //generate new array based on current search criteria
  const generateFilteredData = (filtered = []) => {
    movieData.forEach(movie => {
      if (movie.title.toLowerCase().includes(search)) {
        if (watched === !!movie.watched) {
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
        {search !== '' && <button onClick={() => clearSearch()}>Clear</button>}
      </div>
      <ul className='movies'><MovieList movies={filterData} toggle={toggleStatus}/></ul>
    </div>
  );
};

export default App;