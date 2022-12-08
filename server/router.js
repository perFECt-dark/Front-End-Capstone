const router = require('express').Router();
const controllers = require('./controllers');

router.get('/item/:product_id', controllers.item.get);
router.post('/qa/questions', controllers.post);
module.exports = router;
