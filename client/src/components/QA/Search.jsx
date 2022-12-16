import React from 'react';
import './styles.css';

const { useState } = React;

function Search({ filterQuestions }) {
  const [searched, setSearched] = useState('');
  function handleChange(e) {
    e.preventDefault();
    const text = e.target.value;
    if (text.length >= 3) {
      filterQuestions(text);
    }
    if (text.length <= 2) {
      filterQuestions('');
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input className="search" type="text" name="search" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={handleChange} />
      </form>
    </div>
  );
}

export default Search;
