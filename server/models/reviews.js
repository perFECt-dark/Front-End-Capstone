const axios = require('axios');
require('dotenv').config();

module.exports = {

  getAll: function (cb, product_id, rCount, rSort) {

    console.log(rSort);
    let optionsReviews = {
      headers: {
        Authorization: process.env.AUTH
      },
      params: {
        page: 1,
        count: rCount,
        sort: rSort,
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

  },

  PostReview: function (cb, reviewPost) {

    let options = {
      headers: {
        Authorization: process.env.AUTH
      }
    };

    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/', reviewPost, options)
    .then((response) => {

      cb(null, response.data);
    })
    .catch((err) => {

      cb(err);
    });

  }
};