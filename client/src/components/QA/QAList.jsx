import React from 'react';
import './styles.css';
import QAListEntry from './QAListEntry.jsx';

function QAList({ questionData, showA, setShowA }) {
  return (
    <div>
      {questionData !== null
        ? <QAListEntry questionData={questionData} showA={showA} setShowA={setShowA}/>
        : null}
    </div>
  );
}

export default QAList;
