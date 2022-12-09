const models = require('../models/');

module.exports = {
  get: function (req, res) {
    models.item.getAll((err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.status(201).send(data);
      }
    }, req.params.product_id);
  }
};
