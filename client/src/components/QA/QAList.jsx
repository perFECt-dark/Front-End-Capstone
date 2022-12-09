import React from 'react';
import './styles.css';
import QAListEntry from './QAListEntry.jsx';

function QAList({
  curQuestions, product
}) {
  console.log('current questions are', curQuestions);
  return (
    <div>
      {curQuestions !== null
        ? curQuestions.map((curQuestion) => (
          <QAListEntry
            curQuestion={curQuestion}
            product={product}
          />
        ))
        : null }
    </div>
  );
}

export default QAList;
