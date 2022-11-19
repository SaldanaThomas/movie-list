const db = require('../db');

const getAll = (callback) => {
  db.query("SELECT * FROM movies"), (err, data) => {
    callback(err, data);
  }
};

const create = (title, callback) => {
  db.query(`INSERT INTO movies (title) VALUES ("${title}")
`), (err, data) => {
  callback(err, data);
  }
};

exports = {
  getAll,
  create
};