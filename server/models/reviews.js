const axios = require('axios');
require('dotenv').config();

module.exports = {

  getAll: function (cb, product_id, rCount) {

    let optionsReviews = {
      headers: {
        Authorization: process.env.AUTH
      },
      params: {
        page: 1,
        count: rCount,
        sort: 'relevant',
        product_id: product_id
      }
    };

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/', optionsReviews)
     .then((reviews) => {

      cb(null, reviews.data);

     })
     .catch((err) => {

      cb(err);

     });

  }
};