const controllers = require('./controllers');
const router = require('express').Router();

router.get('/item/:product_id', controllers.item.get);
module.exports = router;