const {useState, useEffect} = React;
import React from 'react';
import Movie from './Movie.jsx';
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
  const [movies, setMovies] = useState(data);

  const searchMovies = (event) => {
    event.preventDefault();
    let input = document.getElementById('search').value
    let matchSearch = [];
    data.forEach((movie) => {
      if( input !== '' && movie.title.includes(input)) {
        matchSearch.push(movie);
      }
    })
      if (matchSearch.length > 0) {
        setMovies(matchSearch);
      } else {
        console.log('No Search Matches');
      }
  };

  const addMovie = (event) => {
    event.preventDefault();
    let input = document.getElementById('add').value;
    if (input.lenght > 0) {
      data.push({'title': input});
      setMovies(data);
    }
    console.log('add Movie');
  };

  return (
  <div>
    <div className='banner'><h1><em>Movie List</em></h1></div>
    <div><Add add={addMovie}/></div>
    <div><Search search={searchMovies}/></div>
    <div>Watched/To Watch</div>
    <ul className='movies'>{movies.map((movie, index) => <Movie movie={movie} key={index}/>)}</ul>
  </div>
  );
};

export default App;