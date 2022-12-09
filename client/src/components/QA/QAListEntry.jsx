import React from 'react';
import axios from 'axios';
import './styles.css';
import AnswerList from './AnswerList.jsx';
import AnswerModal from './AnswerModal.jsx';

const { useState } = React;

function QAListEntry({ curQuestion, showA, setShowA, product }) {
  // console.log('cur question ', curQuestion);
  // console.log('cur question ', curQuestion.question_id);
  const array = [];
  if (curQuestion !== null) {
    const answersList = curQuestion.answers;
    const keyList = Object.keys(answersList);
    for (let i = 0; i < keyList.length; i += 1) {
      // console.log('ideally this gives answers ', answersList[keyList[i]]);
      array.push(answersList[keyList[i]]);
    }
  }
  const [numAnswers, setNumAnswers] = useState(2);
  const [curAnswers, setCurAnswers] = useState(array.slice(0, 2));
  function addMoreAnswers(num) {
    // console.log('array of answers', array);
    const sizedList = array.slice(0, num);
    // console.log('current list of answers to show ', sizedList);
    setCurAnswers(sizedList);
  }
  function handleLoadMoreA(e) {
    e.preventDefault();
    // console.log('clicked');
    let newNum = numAnswers;
    newNum += 2;
    setNumAnswers(newNum);
    // console.log(numQ);
    addMoreAnswers(numAnswers);
  }
  function handleQHelpful(e) {
    e.preventDefault();
    // console.log('clicked');
    const url = `http://localhost:3000/qa/questions/${curQuestion.question_id}/helpful`;
    axios.put(url, {
      question_id: curQuestion.question_id,
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
      {curQuestion !== null
        ? (
          <div>
            <div>
              <a className="q-tag">Q:</a>
              <a className="q-body">{curQuestion.question_body}</a>
              <a className="q-helpful">Helpful?</a>
              <u className="yes" onClick={handleQHelpful}>Yes</u>
              <a className="yes-count">
                (
                {curQuestion.question_helpfulness}
                )
              </a>
              <a className="vertical-bar">|</a>
              <u className="add-answer" onClick={() => setShowA(true)}>Add Answer</u>
            </div>
            <div>
              <AnswerModal className="answer-modal" showA={showA} onCloseA={() => setShowA(false)} curQuestion={curQuestion} product={product} />
            </div>
            <div>
              <AnswerList curAnswers={curAnswers} numAnswers={numAnswers} />
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
