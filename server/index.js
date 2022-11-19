const express = require('express');
const app = express();

app.use(express.json());

const router = require('./routes.js');

app.use('/api', router)
app.use(express.static('client/dist'));

app.listen(3000, () => {
  console.log(`Server listening on port: 3000}`);
});