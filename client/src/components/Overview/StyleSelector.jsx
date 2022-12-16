/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import StyleEntry from './renderOne/StyleEntry.jsx';

const StyleSelector = ({ style, click, currentStyle }) => {
  const textStyle = style.results[currentStyle] || style.results[0];
  return (
    <div id="selection-box" className="right-col">
      <h5 data-testid="current-style">
        Style
        {' > '}
        {textStyle.name}
      </h5>
      {style.results.length !== 0
      && style.results.map((item, index) => {
        return (
          <StyleEntry
            index={index}
            key={item.style_id}
            item={item}
            click={click}
            currentStyle={currentStyle}
          />
        );
      })}
    </div>
  );
};
StyleSelector.propTypes = {
  style: PropTypes.shape().isRequired,
  click: PropTypes.func.isRequired,
  currentStyle: PropTypes.number.isRequired,
};
export default StyleSelector;
