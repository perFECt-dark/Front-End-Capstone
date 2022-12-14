const models = require('../models/');

module.exports = {
  get: function (req, res) {
    models.item.getAll((err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(501);
      } else {
        res.status(201).send(data);
      }
    }, req.params.product_id);
  },

  getCard: function (req, res) {

    models.item.getCard((err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(501);
      } else {
        res.status(201).send(data);
      }
    }, req.params.product_id);
  }
};
