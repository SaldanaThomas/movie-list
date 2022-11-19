const express = require('express');
const MoviesController = require('./controllers/MoviesControllers');
const app = express();

app.use(express.json());


app.get('/movies', (req, res) => {

});

app.post('/movies', (req, res) => {

});

app.use(express.static('client/dist'));

app.listen(3000, () => {
  console.log(`Server listening on port: 3000}`);
});