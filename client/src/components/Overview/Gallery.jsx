/* eslint-disable react/function-component-definition */
import React from 'react';
import Thumbnail from './Thumbnail.jsx'

const Gallery = () => {
  const currentImg = 'placeholder';
  const thumbnails = []; // placeholder array
  return (
    <div id="main-image">
      <img src={currentImg} alt="" />
      <div className="thumbnails">
        {thumbnails.map((image) => (
          <Thumbnail image={image} />
        ))}
      </div>
      Gallery
    </div>
  );
};

export default Gallery;
