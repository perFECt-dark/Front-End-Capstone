/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';

const StyleEntry = ({ item, click, index }) => {
  return (
    <img
      className="style-icons"
      src={item.photos[0].thumbnail_url}
      name={index}
      alt=""
      onClick={(e) => { click(e); }}
    />
  );
};
StyleEntry.propTypes = {
  item: PropTypes.shape().isRequired,
  click: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
export default StyleEntry;
