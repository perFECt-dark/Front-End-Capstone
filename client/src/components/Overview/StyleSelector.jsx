/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import StyleEntry from './StyleEntry.jsx';

const StyleSelector = () => {
  var selected = 'SELECTED STYLE';
  const placeholder = {
    float: 'left',
    width: '30%',
    padding: '15px',
    border: '10px solid purple',
    margin: '0 10px',
  }
  return (
    <div style={placeholder} id="selection-box" className="right-col">
      <h4> Style: {selected}</h4>
      <StyleEntry />
      <StyleEntry />
      <StyleEntry />
      <StyleEntry />
      <StyleEntry />
      <StyleEntry />

    </div>
  );
};

export default StyleSelector;
