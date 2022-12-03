/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import StyleEntry from './renderOne/StyleEntry.jsx';

const StyleSelector = ({ style }) => {
  console.log('style input: ', style);
  return (
    <div id="selection-box" className="right-col">
      <h4>
        Style
        {'>'}
      </h4>
      {/* {style.results.length !== 0 && style.results.map((item) =>
        (<StyleEntry />))} */}
    </div>
  );
};

export default StyleSelector;
