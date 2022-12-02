/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import StyleEntry from './renderOne/StyleEntry.jsx';

const StyleSelector = () => {
  const selected = 'SELECTED STYLE';
  const placeholder = {
    position: 'relative',
    float: 'left',
    maxHeight: '200px',
    width: '30%',
    padding: '15px',
    border: '2px solid black',
    topBorder: '0px',
    margin: '0 10px',
    flexWrap: 'wrap',
  };
  return (
    <div style={placeholder} id="selection-box" className="right-col">
      <h4>
        Style:
        {selected}
      </h4>
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
