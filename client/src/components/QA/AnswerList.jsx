import React from 'react';
import AnswerListEntry from './AnswerListEntry.jsx';

// const { useState } = React;

function AnswerList({ curAnswers, showA, setShowA }) {
  console.log('cur answers ', curAnswers);
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
