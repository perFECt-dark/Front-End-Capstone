import React from 'react';
import axios from 'axios';

const { useState } = React;

function AnswerListEntry({ curAnswer }) {
  const [disableReport, setDisableReport] = useState(false);
  const [disableHelpful, setDisableHelpful] = useState(false);
  function handleAHelpful(e) {
    e.preventDefault();
    if (disableHelpful) {
      return;
    }
    setDisableHelpful(true);
    const url = `http://ec2-52-41-185-16.us-west-2.compute.amazonaws.com:3000/qa/answers/${curAnswer.id}/helpful`;
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
    if (disableReport) {
      return;
    }
    setDisableReport(true);
    const url = `http://ec2-52-41-185-16.us-west-2.compute.amazonaws.com:3000/qa/answers/${curAnswer.id}/report`;
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
    <div className="answer-entry">
      <div>
        <a className="a-tag">A:</a>
        <a className="a-body">{curAnswer.body}</a>
      </div>
      <div>
        <a className="user">by {curAnswer.answerer_name}, </a>
        <a className="date"> {new Date(curAnswer.date).toString().slice(4,16)}</a>
        <a className="vertical-bar">|</a>
        <a className="a-helpful">Helpful?</a>
        {disableHelpful === false ? <u className="yes" onClick={handleAHelpful}>Yes</u> : <u className="yes">Yes</u>}
        <a className="yes-count">({disableHelpful === true ? curAnswer.helpfulness + 1 : curAnswer.helpfulness})</a>
        <a className="vertical-bar">|</a>
        {disableReport === false ? <u className="report" onClick={handleAReport}>Report</u> : <u className="report">Reported</u>}
      </div>
    </div>
  );
}

export default AnswerListEntry;
