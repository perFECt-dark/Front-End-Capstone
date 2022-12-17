import React from 'react';
import axios from 'axios';
import './styles.css';
import AnswerList from './AnswerList.jsx';
import AnswerModal from './AnswerModal.jsx';

const { useState, useEffect } = React;

function QAListEntry({ curQuestion, product }) {
  const [showA, setShowA] = useState(false);
  const [disableHelp, setDisableHelp] = useState(false);
  const array = [];
  let answerCount = 0;
  if (curQuestion !== null) {
    const answersList = curQuestion.answers;
    const keyList = Object.keys(answersList);
    for (let i = 0; i < keyList.length; i += 1) {
      array.push(answersList[keyList[i]]);
      answerCount += 1;
    }
  }
  const [numAnswers, setNumAnswers] = useState(2);
  const [curAnswers, setCurAnswers] = useState(array.slice(0, 2));
  function addMoreAnswers(num) {
    const sizedList = array.slice(0, num);
    setCurAnswers(sizedList);
  }
  function handleLoadMoreA(e) {
    e.preventDefault();
    let newNum = numAnswers;
    newNum += 2;
    setNumAnswers(newNum);
  }
  function handleQHelpful(e) {
    e.preventDefault();
    if (disableHelp) {
      return;
    }
    setDisableHelp(true);
    const url = `http://ec2-52-41-185-16.us-west-2.compute.amazonaws.com:3000/qa/questions/${curQuestion.question_id}/helpful`;
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
  function collapseAnswers(e) {
    e.preventDefault();
    const answerList = curAnswers.slice(0, 2);
    setCurAnswers(answerList);
    setNumAnswers(answerList.length);
  }
  useEffect(() => {
    addMoreAnswers(numAnswers);
  }, [numAnswers]);
  useEffect(() => {
    addMoreAnswers(numAnswers);
  }, [curQuestion]);
  return (
    <div className="question-space">
      {curAnswers !== null
        ? (
          <div className="question-entry">
            <div>
                <a className="q-tag">Q:</a>
                <a className="q-body">{curQuestion.question_body}</a>
              <aside className="question-options">
                <a className="q-helpful">Helpful?</a>
                {disableHelp === false ? <u className="yes" onClick={handleQHelpful}>Yes</u> : <u className="yes">Yes</u>}
                <a className="yes-count">
                  (
                  {disableHelp === true
                    ? curQuestion.question_helpfulness + 1 : curQuestion.question_helpfulness}
                  )
                </a>
                <a className="vertical-bar">|</a>
                <u className="add-answer" onClick={() => setShowA(true)}>Add Answer</u>
              </aside>
            </div>
            <div>
              <AnswerModal className="answer-modal" showA={showA} onCloseA={() => setShowA(false)} curQuestion={curQuestion} product={product} />
            </div>
            <div>
              <AnswerList curAnswers={curAnswers} numAnswers={numAnswers} />
            </div>
            <div className="more-answers">
              {answerCount >= 2 && answerCount !== curAnswers.length
                ? <p onClick={handleLoadMoreA}><b>LOAD MORE ANSWERS</b></p> : null}
              {answerCount >= 3 && answerCount === curAnswers.length
                ? <p onClick={collapseAnswers}><b>COLLAPSE ANSWERS</b></p> : null}
            </div>
          </div>
        )
        : <div>Loading</div> }
    </div>
  );
}

export default QAListEntry;
