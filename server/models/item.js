const axios = require('axios');
require('dotenv').config();

module.exports = {

  getAll: function (cb, product_id) {


    var loadedData = {
      meta: null,
      reviews: null,
      productInfo: null,
      productStyles: null,
      relatedProducts: null,
      questions: null
    };

    let optionsReviews = {
      headers: {
        Authorization: process.env.AUTH
      },
      params: {
        page: 1,
        count: 2,
        sort: 'relevant',
        product_id: product_id
      }
    };

    let optionsProduct = {

      headers: {
        Authorization: process.env.AUTH
      },
      params: {
        product_id: product_id
      }
    };

    let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/';

    const reviewMetaData = axios.get(url + 'reviews/meta', optionsProduct);
    const reviews = axios.get(url + 'reviews', optionsReviews);
    const productInfo = axios.get(url + 'products/' + product_id, optionsProduct);
    const productStyles = axios.get(url + 'products/' + product_id + '/styles', optionsProduct);
    const relatedProducts = axios.get(url + 'products/' + product_id + '/related', optionsProduct);
    const questions = axios.get(url + 'qa/questions', optionsProduct);

    Promise.all([reviewMetaData, reviews, productInfo, productStyles, relatedProducts, questions])
    .then(function(values) {

      loadedData.meta = values[0].data;
      loadedData.reviews = values[1].data;
      loadedData.productInfo = values[2].data;
      loadedData.productStyles = values[3].data;
      loadedData.relatedProducts = values[4].data;
      loadedData.questions = values[5].data;


      cb(null, loadedData);
    })
    .catch(function(err) {

      cb(err);
    });

  }
};