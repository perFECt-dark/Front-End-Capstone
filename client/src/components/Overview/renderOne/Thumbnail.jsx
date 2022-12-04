/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
/* eslint-disable no-var */
/* eslint-disable react/function-component-definition */
import React from 'react';

const Thumbnail = ({ url, click }) => {
  // for selected image...
  // highlight/outline/add some kind of checkmark
  return (
    <img
      className="thumbnail-icon"
      src={url}
      alt=""
      onClick={(e) => { click(e); }}
    />
  );
};

export default Thumbnail;
