import React from 'react';
import axios from 'axios';
import './styles.css';
import AnswerModal from './AnswerModal.jsx';

const { useState } = React;

function QAListEntry({ questionData, showA, setShowA }) {
  const [answers, setAnswers] = useState([]);
  const array = [];
  // console.log('data is ', questionData);
  if (questionData !== null) {
    const answersList = questionData[0].answers;
    const keyList = Object.keys(answersList);
    for (let i = 0; i < 2; i += 1) {
      // console.log('ideally this gives answers ', answersList[keyList[i]]);
      array.push(answersList[keyList[i]]);
    }
  }
  function handleLoadMoreA(e) {
    // load more answers
    e.preventDefault();
    console.log('clicked');
  }
  function handleQHelpful(e) {
    e.preventDefault();
    console.log('clicked');
    const url = 'http://localhost:3000/qa/questions/642627/helpful';
    axios.put(url, {
      question_id: 642627,
    })
      .then(() => {
        console.log('successful put request from question modal');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleAHelpful(e) {
    e.preventDefault();
    console.log('clicked');
    const url = 'http://localhost:3000/qa/answers/5989554/helpful';
    axios.put(url, {
      answer_id: 5989554,
    })
      .then(() => {
        console.log('successful put request from question modal');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleAReport(e) {
    e.preventDefault();
    console.log('clicked');
    const url = 'http://localhost:3000/qa/answers/5989488/report';
    axios.put(url, {
      answer_id: 5989488,
    })
      .then(() => {
        console.log('successful put request from question modal');
      })
      .catch((err) => {
        console.log(err);
      });
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
              <u className="yes" onClick={handleQHelpful}>Yes</u>
              <a className="yes-count">
                (
                {questionData[0].question_helpfulness}
                )
              </a>
              <a className="vertical-bar">|</a>
              <u className="add-answer" onClick={() => setShowA(true)}>Add Answer</u>
            </div>
            <div>
              <a className="a-tag">A:</a>
              <a className="a-body">{array[0].body}</a>
            </div>
            <div>
              <a className="user">by {array[0].answerer_name}, </a>
              <a className="date"> {array[0].date}</a>
              <a className="a-helpful">Helpful?</a>
              <u className="yes" onClick={handleAHelpful}>Yes</u>
              <a className="yes-count">({array[0].helpfulness})</a>
              <a className="vertical-bar">|</a>
              <u className="report" onClick={handleAReport}>Report</u>
            </div>
            <div>
              <AnswerModal className="answer-modal" showA={showA} onCloseA={() => setShowA(false)} />
            </div>
            <div>
              <p onClick={handleLoadMoreA}><b>LOAD MORE ANSWERS</b></p>
            </div>
          </div>
        )
        : <div>Loading</div> }
    </div>
  );
}

export default QAListEntry;
