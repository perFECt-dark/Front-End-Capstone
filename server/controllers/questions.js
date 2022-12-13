const models = require('../models');

function getQ(req, res) {
  models.questions.getQuestions((err, result) => {
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
  console.log('data in controller is ', req.body);
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
  console.log('data in controller is ', req.body);
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
  console.log('data in controller is ', req.body);
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
  console.log('data in controller is ', req.body);
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
  console.log('data in controller is ', req.body);
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

// module.exports = {
//   getQ: function(req, res) {
//     models.questions.getQuestions((err, result) => {
//       if (err) {
//         console.log('err in controllers get questions ');
//         res.status(404).send();
//       } else {
//         res.status(200).send(result);
//       }
//     });
//   },
//   getA: function(req, res) {
//     const data = req.body;
//     models.questions.getAnswers(data, (err, result) => {
//       if (err) {
//         console.log('err in controllers get answers ');
//         res.status(404).send();
//       } else {
//         res.status(200).json(result);
//       }
//     });
//   },
//   postQ: function(req, res) {
//     console.log('data in controller is ', req.body);
//     models.questions.postQuestion(req.body, (err, result) => {
//       if (err) {
//         console.log('err in controllers post questions ', err);
//         res.status(404).send();
//       } else {
//         res.status(201).send();
//       }
//     });
//   },
//   postA: function(req, res) {
//     console.log('data in controller is ', req.body);
//     models.questions.postAnswer(req.body, (err, result) => {
//       if (err) {
//         console.log('err in controllers post answers ');
//         res.status(404).send();
//       } else {
//         res.status(201).send();
//       }
//     });
//   },
//   putQHelp: function(req, res) {
//     console.log('data in controller is ', req.body);
//     models.questions.putQHelpful(req.body, (err, result) => {
//       if (err) {
//         console.log('err in controllers post answers ', err);
//         res.status(404).send();
//       } else {
//         res.status(204).send();
//       }
//     });
//   },
//   // putQRep: function(req, res) {
//   //   console.log('data in controller is ', req.body);
//   //   models.questions.putQReport(req.body, (err, result) => {
//   //     if (err) {
//   //       console.log('err in controllers post answers ');
//   //       res.status(404).send();
//   //     } else {
//   //       res.status(204).send(result);
//   //     }
//   //   });
//   // },
//   putAHelp: function(req, res) {
//     console.log('data in controller is ', req.body);
//     models.questions.putAHelpful(req.body, (err, result) => {
//       if (err) {
//         console.log('err in controllers post answers ');
//         res.status(404).send();
//       } else {
//         res.status(204).send();
//       }
//     });
//   },
//   putARep: function(req, res) {
//     console.log('data in controller is ', req.body);
//     models.questions.putAReport(req.body, (err, result) => {
//       if (err) {
//         console.log('err in controllers post answers ');
//         res.status(404).send();
//       } else {
//         res.status(204).send();
//       }
//     });
//   }
// };
