/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
/* eslint-disable no-var */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({
  url, click, index, currentImage, icons,
}) => {
  // for selected image...
  // highlight/outline/add some kind of checkmark
  let highlight;
  if (index === currentImage) {
    highlight = (
      <img
        className={icons}
        name={index}
        src={url}
        alt=""
        onClick={(e) => { click(e); }}
        style={{ boxShadow: '0 0 0 3px rgba(0, 0, 0, 1)' }}
      />
    );
  } else {
    highlight = (
      <img
        className={icons}
        name={index}
        src={url}
        alt=""
        onClick={(e) => { click(e); }}
      />
    );
  }
  return (highlight);
};
Thumbnail.propTypes = {
  url: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Thumbnail;
