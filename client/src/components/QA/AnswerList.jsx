import React from 'react';
import AnswerListEntry from './AnswerListEntry.jsx';

function AnswerList({ curAnswers, showA, setShowA }) {
  return (
    <div>
      {curAnswers !== null
        ? curAnswers.map((curAnswer) => (
          <AnswerListEntry curAnswer={curAnswer} showA={showA} setShowA={setShowA} />
        ))
        : null }
    </div>
  );
}

export default AnswerList;
