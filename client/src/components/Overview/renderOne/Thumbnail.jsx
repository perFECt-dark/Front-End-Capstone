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
  const urlSource = url || 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
  let highlight = (
    <img
      className={icons}
      name={index}
      src={urlSource}
      alt=""
      onClick={(e) => { click(e); }}
      onError={(e) => { e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'; }}
    />
  );
  if (index === currentImage) {
    highlight = (
      <img
        className={icons}
        id="focused"
        name={index}
        src={urlSource}
        alt=""
        onClick={(e) => { click(e); }}
        style={{ boxShadow: '0 0 0 3px rgba(0, 0, 0, 1)' }}
      />
    );
  }
  return (highlight);
};
Thumbnail.propTypes = {
  url: PropTypes.string,
  click: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  currentImage: PropTypes.number.isRequired,
  icons: PropTypes.string.isRequired,
};
Thumbnail.defaultProps = {
  url: '"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"',
};

export default Thumbnail;
