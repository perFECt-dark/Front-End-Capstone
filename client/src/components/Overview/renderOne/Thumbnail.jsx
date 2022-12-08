/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
/* eslint-disable no-var */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({ url, click, index }) => {
  // for selected image...
  // highlight/outline/add some kind of checkmark
  return (
    <img
      className="thumbnail-icon"
      name={index}
      src={url}
      alt=""
      onClick={(e) => { click(e); }}
    />
  );
};
Thumbnail.propTypes = {
  url: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Thumbnail;
