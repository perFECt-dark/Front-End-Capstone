import React from 'react';
import axios from 'axios';
import './styles.css';

const { useState } = React;

function QuestionModal({showQ, onCloseQ, product, productInfo}) {
  const [questionWarning, setQuestionWarning] = useState(false);
  if (!showQ) {
    return null;
  }
  function addQuestion(q, n, e) {
    const url = 'http://ec2-52-41-185-16.us-west-2.compute.amazonaws.com:3000/qa/questions';
    axios.post(url, {
      body: q,
      name: n,
      email: e,
      product_id: productInfo.id,
    })
      .then(() => {
        console.log('successful post request from question modal');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const question = e.target.question.value;
    const nickname = e.target.nickname.value;
    const email = e.target.email.value;
    if (!question || !nickname || !email) {
      setQuestionWarning(true);
      return;
    }
    if (!Array.isArray(validateEmail(email))) {
      setQuestionWarning(true);
      return;
    }
    addQuestion(question, nickname, email);
    onCloseQ();
  };
  return (
    <div className="modal-background">
      <div className="question-modal">
        <div className="modal-header">
          <div className="titleCloseBtn">
            <button className="closeBtn" onClick={() => onCloseQ(false)}> X </button>
          </div>
          <h2 className="modal-title">Ask Your Question</h2>
          <div>
            <h3>
              About the
              <a> {product}</a>
            </h3>
          </div>
        </div>
        <div className="modal-content" />
        <div className="modal-body">
          <div className="warning-div">
          {questionWarning ? <a className="warning">You Must Enter The Following</a> : null}
          </div>
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="modal-titles">
              Your Question
            </div>
            <div>
              <textarea className="modal-input" type="text" name="question" maxLength="1000" />
            </div>
            <div className="modal-titles">
              Your Nickname
            </div>
            <div>
              <input className="modal-nickname" type="text" name="nickname" placeholder="Example: jack543!" maxLength="60" />
              <div>
                <a className="modal-footers">For privacy reasons, do not use your full name or email address</a>
              </div>
            </div>
            <div className="modal-titles">
              Your Question
            </div>
            <div>
              <input className="modal-email" type="text" name="email" placeholder="Example: jack@email.com" maxLength="60" />
              <div>
                <a className="modal-footers">For authentication reasons, you will not be emailed</a>
              </div>
            </div>
            <button className="modal-button" type="Submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default QuestionModal;
