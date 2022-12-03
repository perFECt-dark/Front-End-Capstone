const router = require('express').Router();
const controllers = require('./controllers');

router.get('/item/:product_id', controllers.item.get);
module.exports = router;
