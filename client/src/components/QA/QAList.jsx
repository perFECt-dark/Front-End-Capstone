import React from 'react';
import './styles.css';
import QAListEntry from './QAListEntry.jsx';

function QAList({ questionData }) {
  return (
    <div>
      {questionData !== null
        ? <QAListEntry questionData={questionData} />
        : null}
    </div>
  );
}

export default QAList;
