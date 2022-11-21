const db = require('../db');

const getAll = (callback) => {
  db.query("SELECT * FROM movies", (err, data) => {
    callback(err, data);
  });
};

const update = (movie, callback) => {
  const property = movie.data
  // console.log(`MODELS -> Movie: ${movie.title} ${property}: ${movie[property]}`);
  movie[property] = !movie[property];
  // console.log(`MODELS OPPOSITE -> Movie: ${movie.title} ${property}: ${movie[property]}`);
  db.query(`UPDATE movies SET ${property}=${movie[property]} WHERE id=${movie.id}`, (err, data) => {
    callback(err, data);
  });
};

const create = ({title, year, runTime, metaScore, imdbRating, watched, details}, callback) => {
  db.query(`INSERT INTO movies (title, year, runTime, metaScore, imdbRating, watched, details) VALUES ("${title}", ${year}, ${runTime}, ${metaScore}, ${imdbRating}, ${watched}, ${details})`, (err, data) => {
  callback(err, data);
  });
};

module.exports = {
  getAll,
  update,
  create
};