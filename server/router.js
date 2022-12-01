const controllers = require('./controllers/movies.js');
const router = require('/express').Router();

router.get('/', controllers.get);

module.exports = router;