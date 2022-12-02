/* eslint-disable react/button-has-type */
/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import React from 'react';
import Thumbnail from './renderOne/Thumbnail.jsx';

const Gallery = () => {
  const thumbnails = (
    <div className="thumbnails">
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
    </div>
  );
  const left = <button>←</button>;
  const right = <button>→</button>;
  const down = <button>↓</button>;
  const expand = <button>⤢</button>;
  return (
    <div className="gallery-area">
      <div id="main-image">
        {thumbnails}
      </div>
      <div className="arrows">
        {left}
        {right}
        {down}
      </div>
      {expand}
    </div>
  );
};

export default Gallery;
