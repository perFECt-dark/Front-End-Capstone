import React from 'react';
import axios from 'axios';
import './styles.css';

const { useState } = React;

function AnswerModal({showA, onCloseA, product, curQuestion }) {
  const [warning, setWarning] = useState(false);
  if (!showA) {
    return null;
  }
  function addAnswer(a, n, e) {
    const url = `http://localhost:3000/qa/questions/${curQuestion.question_id}/answers`;
    axios.post(url, {
      body: a,
      name: n,
      email: e,
      question_id: curQuestion.question_id,
    })
      .then(() => {
        console.log('successful post request from answer modal');
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
    const answer = e.target.answer.value;
    const name = e.target.nickname.value;
    const email = e.target.email.value;
    if (!answer || !name || !email) {
      setWarning(true);
      return;
    }
    if (!Array.isArray(validateEmail(email))) {
      setWarning(true);
      return;
    }
    addAnswer(answer, name, email);
    onCloseA();
  };
  return (
    <div className="modal-background">
      <div className="answer-modal">
        <div className="modal-header">
          <div className="titleCloseBtn">
            <button className="closeBtn" onClick={() => onCloseA(false)}> X </button>
          </div>
          <h2 className="modal-title">Submit Your Answer</h2>
          <h3>
            {product}: {curQuestion.question_body}
          </h3>
        </div>
        <div className="modal-content" />
        <div className="modal-body">
          {warning ? <a className="warning">You Must Enter The Following</a> : null}
          <form onSubmit={handleSubmit}>
            <div className="modal-titles">
              Your Answer
            </div>
            <div>
              <textarea className="modal-input" type="text" name="answer" maxLength="1000" />
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
              Your Email
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

export default AnswerModal;
