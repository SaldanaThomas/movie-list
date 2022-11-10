const {useState, useEffect} = React;
import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';

const data = [
  {title: 'Mean Girls', watched: false},
  {title: 'Hackers', watched: false},
  {title: 'The Grey', watched: false},
  {title: 'Sunshine', watched: false},
  {title: 'Ex Machina', watched: false},
];

class App (props) {
  const [movieData, setMovieData] = useState(data);
  const [filterData, setFilterData] = useState(null);

  const searchMovies = (event) => {
    event.preventDefault();
    let input = document.getElementById('search').value.toLowerCase();
    let matches = [];
    movieData.forEach((movie) => {
      if (input !== '' && movie.title.toLowerCase().includes(input)) {
        matches.push(movie);
      }
    })
    if (input.length === 0) {
      setFilterData(movieData);
    } else {
      setFilterData(matches);
    }
    if (matches.length === 0 && input.length > 0) {
      alert('No matching videos!');
    }
  };

  const addMovie = (event) => {
    event.preventDefault();
    let input = document.getElementById('add').value;
    let tempArray = movieData.slice();
    if (input.length > 0) {
      //need to prevent duplicates
      tempArray.push({'title': input, 'watched': false});
      setMovieData(tempArray);
      //add to filter if meets criteria
    }
  };

  const watchList = (status) => {
    let tempArray = movieData.filter(movie => movie.watched === status);
    setFilterData(tempArray);
  };

  const toggleWatchStatus = (movie) => {
    let tempArray = movieData;
    for (var i = 0; i < tempArray.length; i++) {
      if (tempArray[i].title === movie.title) {
        console.log(movie.title);
        console.log( tempArray[i].watched);
        tempArray[i].watched = !tempArray[i].watched;
        console.log( tempArray[i].watched);
      }
    }
    setMovieData(tempArray);
  };

  return (
  <div>
    <div className='banner'><h1><em>Movie List</em></h1></div>
    <div><Add add={addMovie}/></div>
    <div><Search search={searchMovies}/></div>
    <div>
      <button className='watched' onClick={() => watchList(true)}> Watched </button>
      <button className='toWatch' onClick={() => watchList(false)}> To Watch </button>
    </div>
    <ul className='movies'><MovieList videos={Array.isArray(filterData) ? filterData : movieData} toggle={toggleWatchStatus}/></ul>
  </div>
  );
};

export default App;