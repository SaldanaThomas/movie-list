const MoviesModels = require('../models/MoviesModel');

const get = (req, res) => {
  MoviesModels.getAll((err, movies) => ) {
    if (err) {
      res.status(404).send();
    } else {
      res.status(200).send(movies);
    }
  }
};

const post = (req, res) => {
  MoviesModels.create((err, movies) => {
    if (err) {
      res.status(404).send();
    } else {
      res.status(201).send();
    }
  })
};

exports = {
  get,
  post
};