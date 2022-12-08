import React from 'react';
import './styles.css';

function QuestionModal(props) {
  if (!props.showQ) {
    return null;
  }
  function handleSubmit(e) {
    e.preventDefault();
    const question = e.target.question.value;
    const nickname = e.target.nickname.value;
    const email = e.target.email.value;
    console.log(question, nickname, email);
    // addQuestion(question, nickname, email);
    addQuestion();
    props.onClose();
  }
  function addQuestion(q, n, e) {
    axios.post(url, {
      body: q,
      name: n,
      email: e,
      product_id: 40344,
    })
      .then(() => {
        console.log("successful post request from question modal");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="question-modal">
      <div className="modal-header">
          <h4 className="modal-title">Ask Your Question</h4>
          <div>
            <p>About the [Product Name]</p>
          </div>
        </div>
      <div className="modal-content">
      </div>
      <div className="modal-body">
        <form>
          <div>
          <textarea className="modal-input" type='text' name="question" maxLength="1000"></textarea>
          </div>
          <div>
          <input className="modal-nickname" type='text' name="nickname" placeholder="Example: jack543!"></input>
          </div>
          <div>
          <input className="modal-email" type='text' name="email" placeholder="Example: jack@email.com"></input>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button className="btn" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default QuestionModal;
