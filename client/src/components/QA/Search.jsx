import React from 'react';
import './styles.css';

const { useState } = React;

function Search() {
  const [searchedFor, setSearchedFor] = useState([]);
  function handleChange(event) {
    if (event.target.value.length < 3) {
      // now we have data
      const array = [];
      for (let i = 0; i < event.target.value.length; i + 1) {
        array.push(event.target.value);
      }
      if (array.length > 0) {
        setSearchedFor(array);
      }
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input className="search" type="text" name="search" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={handleChange} />
        <input type="submit" name="Search" value="Search"></input>
      </form>
    </div>
  );
}

export default Search;
