import React from 'react';
import axios from 'axios';
import './styles.css';

function AnswerModal({showA, onCloseA, product, curQuestion }) {
  if (!showA) {
    return null;
  }
  function addAnswer(a, n, e) {
    const url = `http://localhost:3000/qa/questions/${curQuestion.question_id}/answers`;
    axios.post(url, {
      body: a,
      name: n,
      email: e,
      photos: ['test1', 'test2', 'test3'],
      question_id: curQuestion.question_id,
    })
      .then(() => {
        console.log('successful post request from answer modal');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = e.target.answer.value;
    const name = e.target.nickname.value;
    const email = e.target.email.value;
    addAnswer(answer, name, email);
    onCloseA();
  };
  return (
    <div className="answer-modal">
      <div className="modal-header">
        <h4 className="modal-title">Submit Your Answer</h4>
        <div>
          {product}: {curQuestion.question_body}
        </div>
      </div>
      <div className="modal-content" />
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div>
            <textarea className="modal-input" type="text" name="answer" maxLength="1000" />
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

export default AnswerModal;
