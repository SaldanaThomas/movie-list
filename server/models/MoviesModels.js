const db = require('../db');

module.exports = {
  getAll: (callback) => {
    db.query("SELECT * FROM movies", (err, data) => {
      callback(err, data);
    });
  },

  update: (movie, callback) => {
    const item = movie.data
    movie[item] = !movie[item];
    db.query(`UPDATE movies SET ${item}=${movie[item]} WHERE id=${movie.id}`, (err, data) => {
      callback(err, data);
    });
  },

  create: ({title, year, runTime, metaScore, imdbRating, watched, details}, callback) => {
    db.query(`INSERT INTO movies (title, year, runTime, metaScore, imdbRating, watched, details) VALUES ("${title}", ${year}, ${runTime}, ${metaScore}, ${imdbRating}, ${watched}, ${details})`, (err, data) => {
    callback(err, data);
    });
  }
};