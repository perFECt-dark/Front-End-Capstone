/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';

const StyleSelector = () => {
  var selected = 'SELECTED STYLE';
  return (
    <div id="selection-box" className="right-col">
      <h4> Style > {selected}</h4>


    </div>
  );
};

export default StyleSelector;
