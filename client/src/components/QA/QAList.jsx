import React from 'react';
import './styles.css';
import QAListEntry from './QAListEntry.jsx';

function QAList({
  curQuestions, showA, setShowA, product
}) {
  console.log('current questions are', curQuestions);
  return (
    <div>
      {curQuestions !== null
        ? curQuestions.map((curQuestion) => (
          <QAListEntry
            curQuestion={curQuestion}
            showA={showA}
            setShowA={setShowA}
            product={product}
          />
        ))
        : null }
    </div>
  );
}

export default QAList;
