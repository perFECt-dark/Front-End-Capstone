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
  let highlight = (
    <img
      className={icons}
      name={index}
      src={url}
      alt=""
      onClick={(e) => { click(e); }}
    />
  );
  if (index === currentImage) {
    highlight = (
      <img
        className={icons}
        id="focused"
        name={index}
        src={url}
        alt=""
        onClick={(e) => { click(e); }}
        style={{ boxShadow: '0 0 0 3px rgba(0, 0, 0, 1)' }}
      />
    );
  }
  return (highlight);
};
Thumbnail.propTypes = {
  url: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  currentImage: PropTypes.number.isRequired,
  icons: PropTypes.string.isRequired,
};

export default Thumbnail;
