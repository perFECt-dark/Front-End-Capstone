import React from 'react';
import './styles.css';

const { useState } = React;

function QAListEntry({ questionData }) {
  const [answers, setAnswers] = useState([]);
  const array = [];
  console.log('data is ', questionData);
  if (questionData !== null) {
    const answersList = questionData[0].answers;
    const keyList = Object.keys(answersList);
    for (let i = 0; i < 2; i++) {
      console.log('ideally this gives answers ', answersList[keyList[i]]);
      array.push(answersList[keyList[i]]);
    }
  }
  function handleClick(e) {
    e.preventDefault();
    // load more answers
    console.log('clicked');
  }
  return (
    <div>
      {questionData !== null
        ? (
          <div>
            <div>
              <a className="q-tag">Q:</a>
              <a className="q-body">{questionData[0].question_body}</a>
              {/* <a>?</a> */}
              <a className="q-helpful">Helpful?</a>
              <u className="yes">Yes</u>
              <a className="yes-count">
                (
                {questionData[0].question_helpfulness}
                )
              </a>
              <a className="vertical-bar">|</a>
              <u className="add-answer">Add Answer</u>
            </div>
            <div>
              <a className="a-tag">A:</a>
              <a className="a-body">{array[0].body}</a>
            </div>
            <div>
              <a className="user">by {array[0].answerer_name}, </a>
              <a className="date"> {array[0].date}</a>
              <a className="a-helpful">Helpful?</a>
              <u className="yes">Yes</u>
              <a className="yes-count">({array[0].helpfulness})</a>
              <a className="vertical-bar">|</a>
              <u className="report">Report</u>
            </div>
            {/* <div>
              Q: Question text?
              <a>Helpful?</a>
              <u>Yes</u>
              <a>(25)</a>
              <a>|</a>
              <u className="add-answer">Add Answer</u>
            </div>
            <div className="answer-text">
              A: Answer text.
            </div>
            <div>
              by User1337 -
              <b>Seller</b>
              , Dec 4, 2022
              <a>Helpful?</a>
              <u>Yes</u>
              <a>(2)</a>
              <a>|</a>
              <u>Report</u>
            </div> */}
            <div>
              <p onClick={handleClick}><b>LOAD MORE ANSWERS</b></p>
            </div>
          </div>
        )
        : <div>Loading</div> }
    </div>
  );
}

export default QAListEntry;
