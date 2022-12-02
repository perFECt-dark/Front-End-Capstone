/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import React from 'react';
import Thumbnail from './renderOne/Thumbnail.jsx';

const Gallery = () => {
  const placeholder = {
    position: 'relative',
    float: 'left',
    height: '400px',
    width: '50%',
    maxWidth: '700px',
    padding: '30px',
    border: '15px solid green',
    margin: '10px',
    backgroundImage: 'url("https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/422992/sub/goods_422992_sub14.jpg?width=500")',
  };
  return (
    <div id="main-image">
      <div style={placeholder} />
      <div className="thumbnails">
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
    </div>
  );
};

export default Gallery;
