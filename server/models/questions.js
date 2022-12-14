const axios = require('axios');
require('dotenv').config();

function getQuestions(data, callback) {
  const optionsQuestions = {
    headers: {
      Authorization: process.env.AUTH,
    },
    params: {
      page: 1,
      count: 500,
      product_id: data,
    },
  };
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', optionsQuestions)
    .then((response) => {
      console.log('success in get questions model');
      callback(null, response.data.results);
    })
    .catch((err) => {
      callback(err, null);
    });
}

function getAnswers(data, callback) {
  const optionsQuestions = {
    headers: {
      Authorization: process.env.AUTH,
    },
    params: {
      question_id: data.question_id,
    },
  };
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${data.question_id}/answers`, optionsQuestions)
    .then((response) => {
      console.log('success in get answers model');
      callback(null, response.data.results);
    })
    .catch((err) => {
      callback(err, null);
    });
}

function postQuestion(data, callback) {
  const optionsQuestions = {
    headers: {
      Authorization: process.env.AUTH,
    },
  };
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', data, optionsQuestions)
    .then((response) => {
      console.log('in then success block of question');
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
}

function postAnswer(data, callback) {
  const bodyObj = {};
  bodyObj.body = data.body;
  bodyObj.name = data.name;
  bodyObj.email = data.email;
  bodyObj.photos = data.photos;
  const optionsQuestions = {
    headers: {
      Authorization: process.env.AUTH,
    },
  };
  axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${data.question_id}/answers`, bodyObj, optionsQuestions)
    .then((response) => {
      console.log('in then success block of question');
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
}

function putQHelpful(data, callback) {
  const optionsQuestions = {
    headers: {
      Authorization: process.env.AUTH,
    },
  };
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${data.question_id}/helpful`, null, optionsQuestions)
    .then((response) => {
      console.log('in the success block of helpful question');
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
}

// putQReport: function (data, callback) {
//   console.log('data in model report is ', data)
// },

function putAHelpful(data, callback) {
  const optionsQuestions = {
    headers: {
      Authorization: process.env.AUTH,
    },
  };
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${data.answer_id}/helpful`, null, optionsQuestions)
    .then((response) => {
      console.log('in the success block of helpful answers');
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
}

function putAReport(data, callback) {
  const optionsQuestions = {
    headers: {
      Authorization: process.env.AUTH,
    },
  };
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${data.answer_id}/report`, null, optionsQuestions)
    .then((response) => {
      console.log('in the success block of helpful answers');
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
}

module.exports = {
  getQuestions, getAnswers, postQuestion, postAnswer, putQHelpful, putAHelpful, putAReport,
};
