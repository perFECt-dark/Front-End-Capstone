/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import StyleEntry from './renderOne/StyleEntry.jsx';

const StyleSelector = ({ style }) => {
  console.log('style input: ', style);
  return (
    <div id="selection-box" className="right-col">
      <h5>
        Style
        {' > '}
        {style.results[0].name}
      </h5>
      {style.results.length !== 0
      && style.results.map((item) => (
        <StyleEntry
          key={item.style_id}
          item={item}
        />
      ))}
    </div>
  );
};
StyleSelector.propTypes = { style: PropTypes.shape().isRequired };
export default StyleSelector;
