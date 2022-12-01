/* eslint-disable react/function-component-definition */
import React from 'react';
import Thumbnail from './Thumbnail.jsx'

const Gallery = () => {
  const currentImg = 'placeholder';
  return (
    <div id="main-image">
      <img src={currentImg} alt="" />
      <div className="thumbnails">
        <Thumbnail />
      </div>
      Gallery
    </div>
  );
};

export default Gallery;
