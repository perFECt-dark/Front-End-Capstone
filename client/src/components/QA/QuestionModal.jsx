import React from 'react';
import axios from 'axios';
import './styles.css';

function QuestionModal({showQ, onCloseQ, product}) {
  if (!showQ) {
    return null;
  }
  function addQuestion(q, n, e) {
    console.log('data i want ', q, n, e);
    const url = 'http://localhost:3000/qa/questions';
    axios.post(url, {
      body: q,
      name: n,
      email: e,
      product_id: 40344,
    })
      .then(() => {
        console.log('successful post request from question modal');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log('random something');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
    const question = e.target.question.value;
    const nickname = e.target.nickname.value;
    const email = e.target.email.value;
    console.log(question, nickname, email);
    addQuestion(question, nickname, email);
    onCloseQ();
  };
  return (
    <div className="question-modal">
      <div className="modal-header">
        <h4 className="modal-title">Ask Your Question</h4>
        <div>
          <p>
            About the
            {product}
          </p>
        </div>
      </div>
      <div className="modal-content" />
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div>
            <textarea className="modal-input" type="text" name="question" maxLength="1000" />
          </div>
          <div>
            <input className="modal-nickname" type="text" name="nickname" placeholder="Example: jack543!" maxLength="60" />
            <div>
              <a>For privacy reasons, do not use your full name or email address</a>
            </div>
          </div>
          <div>
            <input className="modal-email" type="text" name="email" placeholder="Example: jack@email.com" maxLength="60" />
            <div>
              <a>For authentication reasons, you will not be emailed</a>
            </div>
          </div>
          <button type="Submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default QuestionModal;
