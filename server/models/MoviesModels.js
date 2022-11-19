const db = require('../db');

const getAll = (callback) => {
  db.query("SELECT * FROM movies", (err, data) => {
    callback(err, data);
  });
};

// const create = ({title, year, runTime, imdbRating, watched, details}, callback) => {
//   db.query(`UPDATE movies (title, year, runTime, metaScore, watched, details) VALUES ("${title}", "${year}", "${runTime}", "${metaScore}", "${watched}", "${detailstitle}", "${details}")`, (err, data) => {
//   callback(err, data);
//   });
// };

const create = ({title, year, runTime, metaScore, imdbRating, watched, details}, callback) => {
  console.log('title: ', title, 'year: ', year, 'run time: ', runTime);
  console.log('meta score: ', metaScore, 'imdb rating: ', imdbRating);
  console.log('watched: ', watched, 'details: ', details);

  db.query(`INSERT INTO movies (title, year, runTime, metaScore, imdbRating, watched, details) VALUES ("${title}", ${year}, ${runTime}, ${metaScore}, ${imdbRating}, ${watched}, ${details})`, (err, data) => {
  callback(err, data);
  });
};

module.exports = {
  getAll,
  create
};