/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './renderOne/Thumbnail.jsx';

const Gallery = ({
  current, click, leftClick, rightClick, first, last, currentImage, expandClick,
}) => {
  let left;
  if (first) {
    left = <button className="hidden arrows">←</button>;
  } else {
    left = <button onClick={() => leftClick()} className="left arrows">←</button>;
  }
  let right;
  if (last) {
    right = <button className="hidden arrows">→</button>;
  } else {
    right = <button onClick={() => rightClick()} className="right arrows">→</button>;
  }
  let down = <button className="down">↓</button>;
  if (current.photos.length < 8) {
    down = <button className="hidden">↓</button>;
  }
  const expand = <button className="expand">⤢</button>;
  return (
    <section className="carousel">
      <div className="col-1-3 thumbnails">
        {current.photos.map((pic, index) => (
          <Thumbnail
            index={index}
            url={pic.thumbnail_url}
            key={pic.thumbnail_url}
            click={click}
          />
        ))}
        {down}
      </div>
      <aside className="col-7-10 around-image">
        {left}
        <img id="selected-image" alt="" src={current.photos[currentImage].url} onClick={() => expandClick()} />
        {right}
      </aside>
      {expand}
    </section>
  );
};
Gallery.propTypes = {
  current: PropTypes.shape().isRequired,
  click: PropTypes.func.isRequired,
  leftClick: PropTypes.func.isRequired,
  rightClick: PropTypes.func.isRequired,
  first: PropTypes.bool.isRequired,
  last: PropTypes.bool.isRequired,
  currentImage: PropTypes.number.isRequired,
};

export default Gallery;
