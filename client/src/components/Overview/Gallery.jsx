/* eslint-disable react/button-has-type */
/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './renderOne/Thumbnail.jsx';

const Gallery = ({ current, click }) => {
  const left = <button className="left">←</button>;
  const right = <button className="right">→</button>;
  let down = <button className="down">↓</button>;
  if (current.photos.length < 8) {
    down = <button style={{ display: 'none' }}>↓</button>;
  }
  const expand = <button className="expand">⤢</button>;
  const thumbnailColStyles = {
    height: '800px',
    paddingTop: '20px',
    width: '100px',
    textAlign: 'center',
  };
  return (
    <section>
      <div
        className="col-1-3 thumbnails"
        style={thumbnailColStyles}
      >
        {current.photos.map((pic) => (
          <Thumbnail
            url={pic.thumbnail_url}
            key={pic.thumbnail_url}
            click={click}
          />
        ))}
        {down}
      </div>
      <aside className="col-7-10" style={{ height: '800px', alignContent: 'center' }}>
        <div className="arrows">
          {left}
          {right}
        </div>
      </aside>
      <aside className="col-1-10" style={{ height: '800px', float: 'right' }}>
        <div className="expand">
          {expand}
        </div>
      </aside>
    </section>
  );
};
Gallery.propTypes = {
  current: PropTypes.shape().isRequired,
  click: PropTypes.func.isRequired,
};

export default Gallery;
