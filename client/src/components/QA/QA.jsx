import React from 'react';
import axios from 'axios';
import './styles.css';
import Search from './Search.jsx';
import QAList from './QAList.jsx';
import QuestionModal from './QuestionModal.jsx';
import AnswerModal from './AnswerModal.jsx';

const { useState, useEffect } = React;

function QA() {
  const [showQ, setShowQ] = useState(false);
  const [showA, setShowA] = useState(false);
  const [numQ, setNumQ] = useState(2);
  const [questionData, setQuestionData] = useState(null);
  function getQuestion() {
    const url = 'http://localhost:3000/qa/questions';
    axios.get(url)
      .then((questions) => {
        console.log('Here is our question data: ', questions.data);
        setQuestionData(questions.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleMoreQuestions() {
    console.log('clicked');
  }
  useEffect(() => {
  /// This effect inciates page with data
    getQuestion();
  }, []);
  return (
    <div className="qa-main">
      { questionData !== null ? (
        <div>
          <h3>QUESTIONS & ANSWERS</h3>
          <div>
            <Search />
          </div>
          <div>
            { questionData !== null ? <QAList questionData={questionData} showA={showA} setShowA={setShowA}/> : null }
          </div>
          <div>
            <QuestionModal className="question-modal" showQ={showQ} onCloseQ={() => setShowQ(false)} />
          </div>
          <div>
            <button type="button" className="more-q" onClick={handleMoreQuestions}>MORE ANSWERED QUESTIONS</button>
            <button type="button" className="add-q" onClick={() => setShowQ(true)}>ADD A QUESTION +</button>
          </div>
        </div>
      )
        : <div>Loading</div> }
    </div>
  );
}

export default QA;
