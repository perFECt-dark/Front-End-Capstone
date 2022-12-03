/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import StyleEntry from './renderOne/StyleEntry.jsx';

const StyleSelector = () => {
  const selected = 'SELECTED STYLE';
  return (
    <div id="selection-box" className="right-col">
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
