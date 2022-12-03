/* eslint-disable react/button-has-type */
/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import React from 'react';
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
  console.log('this is current: ', current);
  let image = '';
  if (Array.isArray(current) === false) {
    image = current.results[0].photos[0].thumbnail_url;
    console.log('image url: ', image);
  }
  return (
    <div className="gallery-area">
      <div id="main-image">
        {/* <img className="loadedimage" src={image} alt="" /> */}
        {thumbnails}
        <div className="leftrightarrows">
          {left}
          {right}
        </div>
        {expand}
      </div>
    </div>
  );
};

export default Gallery;
