const axios = require('axios');
require('dotenv').config();

module.exports = {

  getAll: function (cb, product_id) {

    console.log('here is product id: ', product_id);
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
        count: 5,
        sort: 'relevant',
        product_id: product_id
      }
    }

    let optionsProduct = {

      headers: {
        Authorization: process.env.AUTH
      },
      params: {
        product_id: product_id
      }
    }

    //// All the get requests that happen

    //// Grabs Review meta
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta', optionsProduct)
    .then((meta) => {

      console.log('Reviews Meta Data for id: '+ product_id +' Success!');
      loadedData.meta = meta.data;

      //// then grabs Reviews
       axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/', optionsReviews)
      .then((reviews) => {

        console.log('Reviews Data for id: '+ product_id +' Success!');
        loadedData.reviews = reviews.data;

        //// then grabs product info
        axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/' + product_id, optionsProduct)
      .then((productInfo) => {

        console.log('ProductInfo Data for id: '+ product_id +' Success!');
        loadedData.productInfo = productInfo.data;

        // then grabs productStyles
        axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/' + product_id + '/styles', optionsProduct)
        .then((productStyles) => {

          console.log('ProductStyles Data for id: '+ product_id +' Success!');
          loadedData.productStyles = productStyles.data;

          // then grabs relatedProducts
        axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/' + product_id + '/related', optionsProduct)
        .then((relatedProducts) => {

          console.log('relatedProducts Data for id: '+ product_id +' Success!');
          loadedData.relatedProducts = relatedProducts.data;

            // then grabs questions
        axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', optionsProduct)
        .then((questions) => {

          console.log('questions Data for id: '+ product_id +' Success!');
          loadedData.questions = questions.data;

          cb(null, loadedData);


        })
        .catch((err) => {
          console.log('We did not get Reviews data');
          cb(err);
        });


        })
        .catch((err) => {
          console.log('We did not get Reviews data');
          cb(err);
        });


        })
        .catch((err) => {
          console.log('We did not get Reviews data');
          cb(err);
        });


      })
      .catch((err) => {
        console.log('We did not get Reviews data');
        cb(err);

      });


      })
      .catch((err) => {
        console.log('We did not get Reviews data');
        cb(err);

      });
    })
    .catch((err) => {
      console.log('We did not get Reviews Meta data');
      cb(err);
    });
  }

};