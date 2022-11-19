const MoviesModels = require('../models/MoviesModels');

const get = (req, res) => {
  MoviesModels.getAll((err, movies) => {
    if (err) {
      res.status(404).send();
    } else {
      res.status(200).send(movies);
    }
  });
};

const post = (req, res) => {
  console.log(req.body);
  MoviesModels.create(req.body, (err, movies) => {
    if (err) {
      console.log(err);
      res.status(404).send();
    } else {
      res.status(201).send();
    }
  });
};

module.exports = {
  get,
  post
};