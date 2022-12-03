/* eslint-disable react/button-has-type */
/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import Thumbnail from './renderOne/Thumbnail.jsx';

const Gallery = ({ current }) => {
  const left = <button className="left">←</button>;
  const right = <button className="right">→</button>;
  const down = <button className="down">↓</button>;
  const expand = <button className="expand">⤢</button>;
  const thumbnails = (
    <div className="thumbnails">
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      {down}
    </div>
  );
  const [currentPhoto, setCurrentPhoto] = useState('');
  return (
    <div className="gallery-area" style={{ backgroundSize: 'cover' }}>
      <div id="main-image" style={{ }}>
        {/* <img className="loadedimage" src={image} alt="" /> */}
        {thumbnails}
        <div className="">
          {left}
          {right}
        </div>
        {expand}
      </div>
    </div>
  );
};

export default Gallery;
