const MoviesModels = require('../models/MoviesModels');

module.exports = {
  get: (req, res) => {
    MoviesModels.getAll((err, movies) => {
      err ? res.status(404).send() : res.status(200).send(movies);
    });
  },

  patch: (req, res) => {
    MoviesModels.update(req.body, (err, movies) => {
      err ? res.status(404).send() : res.status(200).send();
    });
  },

  post: (req, res) => {
    MoviesModels.create(req.body, (err, movies) => {
      err ? res.status(404).send() : res.status(201).send();
    });
  },
};