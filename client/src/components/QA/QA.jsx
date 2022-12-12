import React from 'react';
import axios from 'axios';
import './styles.css';
import Search from './Search.jsx';
import QAList from './QAList.jsx';
import QuestionModal from './QuestionModal.jsx';

const { useState, useEffect } = React;

function QA({ productInfo }) {
  const [showQ, setShowQ] = useState(false);
  // const [showA, setShowA] = useState(false);
  const [numQ, setNumQ] = useState(2);
  const [questionData, setQuestionData] = useState(null);
  const [curQuestions, setCurQuestions] = useState(null);
  function getQuestion() {
    const url = 'http://localhost:3000/qa/questions';
    axios.get(url)
      .then((questions) => {
        console.log('Here is our question data: ', questions.data);
        setQuestionData(questions.data);
        setCurQuestions(questions.data.slice(0, 2));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function addMoreQuestions(num) {
    const questionList = questionData.slice(0, num);
    console.log('current list of questions to show ', questionList);
    setCurQuestions(questionList);
  }
  function handleMoreQuestions() {
    console.log('clicked');
    let newNum = numQ;
    newNum += 2;
    setNumQ(newNum);
    // console.log(numQ);
    addMoreQuestions(numQ);
  }
  function collapseQuestions() {
    const questionList = questionData.slice(0, 2);
    setCurQuestions(questionList);
    setNumQ(questionList.length);
  }
  function filterQuestions(text) {
    const copy = curQuestions.slice();
    const result = [];
    for (let i = 0; i < copy.length; i += 1) {
      if (copy[i].question_body.toLowerCase().includes(text.toLowerCase())) {
        result.push(copy[i]);
      }
    }
    setCurQuestions(result);
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
            <Search filterQuestions={filterQuestions}/>
          </div>
          <div>
            { curQuestions !== null
              ? <QAList curQuestions={curQuestions} product={productInfo.name}/> : null }
          </div>
          {/* <div>
            { questionData === null || questionData.length <= 2 ? <button type="button" className="add-q" onClick={() => setShowQ(true)}>ADD A QUESTION +</button> : null}
          </div> */}
          <div>
            <QuestionModal className="question-modal" showQ={showQ} onCloseQ={() => setShowQ(false)} product={productInfo.name} />
          </div>
          <div>
            {curQuestions !== null && curQuestions.length !== questionData.length ? <button type="button" className="more-q" onClick={handleMoreQuestions}>MORE ANSWERED QUESTIONS</button> : <button type="button" className="more-q" onClick={collapseQuestions}>COLLAPSE QUESTIONS</button>}
            {curQuestions !== null && curQuestions.length >= 2 ? <button type="button" className="add-q" onClick={() => setShowQ(true)}>ADD A QUESTION +</button> : null}
          </div>
        </div>
      )
        // : <div>Loading</div> }
        : (
          <div>
            <h3>QUESTIONS & ANSWERS</h3>
            <div>
              <Search />
            </div>
            <div>
              <QuestionModal className="question-modal" showQ={showQ} onCloseQ={() => setShowQ(false)} product={productInfo.name} />
            </div>
            <button type="button" className="add-q" onClick={() => setShowQ(true)}>ADD A QUESTION +</button>
          </div>
        )}
    </div>
  );
}

export default QA;
