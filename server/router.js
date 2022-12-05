const router = require('express').Router();
const controllers = require('./controllers');

/// Grabs all Info on a product
router.get('/item/:product_id', controllers.item.get);

/// Grabs more reviews on a product
router.get('/item/:product_id/reviews/:count', controllers.reviews.get);

module.exports = router;
