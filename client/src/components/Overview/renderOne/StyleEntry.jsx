/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';

const StyleEntry = () => {
  const placeHolder = {
    float: 'left',
    width: '50px',
    height: '50px',
    borderRadius: '100%',
    backgroundImage: 'url("https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/422992/sub/goods_422992_sub14.jpg?width=50")',
  };
  return (
    <div style={placeHolder}>Icons</div>
  );
};

export default StyleEntry;
