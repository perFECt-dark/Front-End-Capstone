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
  const [questionData, setQuestionData] = useState(null);
  function getQuestion(productId) {
    const url = `http://localhost:3000/item/${productId}`;
    axios.get(url)
      .then((update) => {
        console.log('Here is our question data: ', update.data.questions.results);
        setQuestionData(update.data.questions.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
  /// This effect inciates page with data
    getQuestion(40344);
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
            { questionData !== null ? <QAList questionData={questionData} /> : null }
          </div>
          <div>
            <QuestionModal className="question-modal" showQ={showQ} onClose={() => setShowQ(false)} />
          </div>
          <div>
            <AnswerModal className="answer-modal" showQ={showQ} onClose={() => setShowQ(false)} />
          </div>
          <div>
            <button type="button" className="more-q">MORE ANSWERED QUESTIONS</button>
            <button type="button" className="add-q" onClick={() => setShowQ(true)}>ADD A QUESTION +</button>
          </div>
        </div>
      )
        : <div>Loading</div> }
    </div>
  );
}

export default QA;
