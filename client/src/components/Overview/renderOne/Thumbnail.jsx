/* eslint-disable arrow-body-style */
/* eslint-disable no-var */
/* eslint-disable react/function-component-definition */
import React from 'react';

const Thumbnail = ({ url }) => {
  // for selected image...
  // highlight/outline/add some kind of checkmark
  return (
    <img className="thumbnail-icon" src={url} alt="" />
  );
};

export default Thumbnail;
