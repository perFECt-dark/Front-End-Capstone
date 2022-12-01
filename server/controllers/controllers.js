const models = require('../models/');

module.exports = {
  get: function (req, res) {
    // need to make models or potentially just a helper folder/function to request from API
    models.getSomething((err, result) => {
      if (err) {
        res.status(404).send();
      } else {
        res.status(200).send(result);
      }
    });
  }
};