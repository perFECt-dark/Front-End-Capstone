import React from 'react';
import axios from 'axios';

function AnswerListEntry({ curAnswer }) {
  function handleAHelpful(e) {
    e.preventDefault();
    console.log('clicked');
    const url = `http://localhost:3000/qa/answers/${curAnswer.id}/helpful`;
    axios.put(url, {
      answer_id: curAnswer.id,
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
    const url = `http://localhost:3000/qa/answers/${curAnswer.id}/report`;
    axios.put(url, {
      answer_id: curAnswer.id,
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
      <div>
        <a className="a-tag">A:</a>
        <a className="a-body">{curAnswer.body}</a>
      </div>
      <div>
        <a className="user">by {curAnswer.answerer_name}, </a>
        <a className="date"> {new Date(curAnswer.date).toString().slice(4,16)}</a>
        <a className="a-helpful">Helpful?</a>
        <u className="yes" onClick={handleAHelpful}>Yes</u>
        <a className="yes-count">({curAnswer.helpfulness})</a>
        <a className="vertical-bar">|</a>
        <u className="report" onClick={handleAReport}>Report</u>
      </div>
    </div>
  );
}

export default AnswerListEntry;
