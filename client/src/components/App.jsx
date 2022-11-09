const {useState, useEffect} = React;
import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';

const data = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const App = (props) => {
  const [movieData, setMovieData] = useState(data);
  const [searchData, setSearchData] = useState([]);

  const searchMovies = (event) => {
    event.preventDefault();
    let input = document.getElementById('search').value
    let matches = [];
    movieData.forEach((movie) => {
      if (input !== '' && movie.title.includes(input)) {
        matches.push(movie);
      }
    })
    setSearchData(matches);
    if (matches.length === 0) {
      alert('No matching videos!');
    }
  };

  const addMovie = (event) => {
    event.preventDefault();
    let input = document.getElementById('add').value;
    console.log(input);
    let tempArray = movieData.slice();
    if (input.length > 0) {
      //need to prevent duplicates
      tempArray.push({'title': input});
      console.log(movieData);
      setMovieData(tempArray);
    }
  };

  return (
  <div>
    <div className='banner'><h1><em>Movie List</em></h1></div>
    <div><Add add={addMovie}/></div>
    <div><Search search={searchMovies}/></div>
    <div>Watched/To Watch</div>
    <ul className='movies'><MovieList videos={searchData.length > 0 ? searchData : movieData} /></ul>
  </div>
  );
};

export default App;