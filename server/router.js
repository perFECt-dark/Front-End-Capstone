const router = require('express').Router();
const controllers = require('./controllers');

/// Grabs all Info on a product
router.get('/item/:product_id', controllers.item.get);

///Grabs data for a specific card
router.get('/item/:product_id/card', controllers.item.getCard);

/// Grabs more reviews on a product
router.get('/item/:product_id/reviews/:count/:sort', controllers.reviews.get);

/// Posts a Review
router.post('/review/submit', controllers.reviews.post);

/// Puts a Review on a Review
router.put('/reviewId/:review_id/:subType', controllers.reviews.put);

// QA routes below
// get routes
router.get('/qa/questions', controllers.questions.getQ);
router.get('/qa/questions/:question_id/answers', controllers.questions.getA);
// post routes
router.post('/qa/questions', controllers.questions.postQ);
router.post('/qa/questions/:question_id/answers', controllers.questions.postA);
// put routes
router.put('/qa/questions/:question_id/helpful', controllers.questions.putQHelp);
// router.put('/qa/questions/:question_id/report', controllers.questions.putQRep);
router.put('/qa/answers/:answer_id/helpful', controllers.questions.putAHelp);
router.put('/qa/answers/:answer_id/report', controllers.questions.putARep);

module.exports = router;
