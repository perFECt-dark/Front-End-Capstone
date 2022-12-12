import React from 'react';
import './styles.css';

const { useState } = React;

function Search({ filterQuestions }) {
  function handleSubmit(event) {
    event.preventDefault();
    if (event.target.search.value.length >= 3) {
      filterQuestions(event.target.search.value);
    }
  }
  return (
    <div>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input className="search" type="text" name="search" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
        <input type="submit" name="Search" value="Search" />
      </form>
    </div>
  );
}

export default Search;
