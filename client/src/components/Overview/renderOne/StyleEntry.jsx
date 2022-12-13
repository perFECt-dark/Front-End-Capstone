/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';

const StyleEntry = ({
  item, click, index, currentStyle,
}) => {
  let highlight;
  if (index === currentStyle) {
    highlight = (
      <img
        className="style-icons"
        src={item.photos[0].thumbnail_url}
        name={index}
        alt=""
        onClick={(e) => { click(e); }}
        style={{ boxShadow: '0 0 0 3px rgba(0, 0, 0, 1)' }}
      />
    );
  } else {
    highlight = (
      <img
        className="style-icons"
        src={item.photos[0].thumbnail_url}
        name={index}
        alt=""
        onClick={(e) => { click(e); }}
      />
    );
  }
  return (highlight);
};
StyleEntry.propTypes = {
  item: PropTypes.shape().isRequired,
  click: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
export default StyleEntry;
