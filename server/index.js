const express = require('express');
const app = express();
const router = require('./routes.js');
const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use('/api', router)
app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}}`);
});