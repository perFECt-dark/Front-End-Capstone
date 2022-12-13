import React from 'react';
import './styles.css';
import QAListEntry from './QAListEntry.jsx';

function QAList({
  curQuestions, product
}) {
  return (
    <div className="questions-list">
      {curQuestions !== null
        ? curQuestions.map((curQuestion) => (
          <QAListEntry
            curQuestion={curQuestion}
            curQuestions={curQuestions}
            product={product}
          />
        ))
        : null }
    </div>
  );
}

export default QAList;
