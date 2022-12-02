/* eslint-disable no-var */
/* eslint-disable react/function-component-definition */
import React from 'react';

const Thumbnail = (image) => {
  // for selected image...
  // highlight/outline/add some kind of checkmark
  const placeholder = {
    height: '50px',
    width: '50px',
    backgroundImage: 'url("https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/422992/sub/goods_422992_sub14.jpg?width=50")',
  };
  return (
    <div style={placeholder} />
  );
};

export default Thumbnail;
