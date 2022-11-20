const controller = require('./controllers/MoviesControllers');
const router = require('express').Router();

router.get('/movies', controller.get);

router.patch('/movies', controller.patch);

router.post('/cats', controller.post);

module.exports = router;