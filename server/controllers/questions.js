const models = require('../models');

function getQ(req, res) {
  models.questions.getQuestions(req.query.data, (err, result) => {
    if (err) {
      console.log('err in controllers get questions ');
      res.status(404).send();
    } else {
      res.status(200).send(result);
    }
  });
}

function getA(req, res) {
  const data = req.body;
  models.questions.getAnswers(data, (err, result) => {
    if (err) {
      console.log('err in controllers get answers ');
      res.status(404).send();
    } else {
      res.status(200).json(result);
    }
  });
}

function postQ(req, res) {
  models.questions.postQuestion(req.body, (err) => {
    if (err) {
      console.log('err in controllers post questions ', err);
      res.status(404).send();
    } else {
      res.status(201).send();
    }
  });
}

function postA(req, res) {
  models.questions.postAnswer(req.body, (err) => {
    if (err) {
      console.log('err in controllers post answers ');
      res.status(404).send();
    } else {
      res.status(201).send();
    }
  });
}

function putQHelp(req, res) {
  models.questions.putQHelpful(req.body, (err) => {
    if (err) {
      console.log('err in controllers post answers ', err);
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
}

function putAHelp(req, res) {
  models.questions.putAHelpful(req.body, (err) => {
    if (err) {
      console.log('err in controllers post answers ');
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
}

function putARep(req, res) {
  models.questions.putAReport(req.body, (err) => {
    if (err) {
      console.log('err in controllers post answers ');
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
}

module.exports = {
  getQ, getA, postQ, postA, putQHelp, putAHelp, putARep,
};
