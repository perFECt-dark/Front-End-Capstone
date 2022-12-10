const models = require('../models/');

module.exports = {
  get: function (req, res) {

    models.reviews.getAll((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    }, req.params.product_id, req.params.count, req.params.sort);
  }

};