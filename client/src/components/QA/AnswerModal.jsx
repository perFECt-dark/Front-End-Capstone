import React from 'react';
import axios from 'axios';
import './styles.css';

function AnswerModal(props) {
  if (!props.showA) {
    return null;
  }
  function addAnswer(a, n, e) {
    const url = 'http://localhost:3000/qa/questions/642627/answers';
    axios.post(url, {
      body: a,
      name: n,
      email: e,
      photos: ['test1', 'test2', 'test3'],
      question_id: 642627,
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
    console.log('clicked');
    const answer = e.target.answer.value;
    const name = e.target.nickname.value;
    const email = e.target.email.value;
    console.log(answer, name, email);
    addAnswer(answer, name, email);
    props.onCloseA();
  };
  return (
    <div className="answer-modal">
      <div className="modal-header">
          <h4 className="modal-title">Submit Your Answer</h4>
          <div>
            <p>[Product Name]: [Question Body]</p>
          </div>
        </div>
      <div className="modal-content">
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div>
            <textarea className="modal-input" type='text' name="answer" maxLength="1000"></textarea>
          </div>
          <div>
            <input className="modal-nickname" type='text' name="nickname" placeholder="Example: jack543!"></input>
            <div>
              <a>For privacy reasons, do not use your full name or email address</a>
            </div>
          </div>
          <div>
            <input className="modal-email" type='text' name="email" placeholder="Example: jack@email.com"></input>
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
