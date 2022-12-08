/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './renderOne/Thumbnail.jsx';

const Expanded = ({
  current, click, leftClick, rightClick, first, last, currentImage,
}) => {
  // left arrow should exist, render it, else hide
  let left;
  if (first) {
    left = <button className="hidden arrows">←</button>;
  } else {
    left = <button onClick={() => leftClick()} className="left arrows">←</button>;
  }
  // if right arrow should exist, render it, else hide
  let right;
  if (last) {
    right = <button className="hidden arrows">→</button>;
  } else {
    right = <button onClick={() => rightClick()} className="right arrows">→</button>;
  }
  // render down button if there are more than 7 thumbnails
  let down = <button className="down">↓</button>;
  if (current.photos.length < 8) {
    down = <button className="hidden">↓</button>;
  }
  // background for zoom handler
  const zoomStyle = {
    backgroundImage: `url(${current.photos[currentImage].url})`,
  };
  // 2.5x zoom handler
  const zoomHandler = (event) => {
    if (event.target.htmlFor !== 'zoom') {
      return;
    }
    // set target to be the label
    const zoomTo = event.target;
    let offsetX;
    let offsetY;
    // if there is an offset, set variable respectively
    if (event.nativeEvent.offsetX) {
      offsetX = event.nativeEvent.offsetX;
    }
    if (event.nativeEvent.offsetX) {
      offsetY = event.nativeEvent.offsetY;
    }
    // calculate percentage of background to show
    const x = (offsetX / zoomTo.offsetWidth) * 100;
    const y = (offsetY / zoomTo.offsetHeight) * 100;
    zoomTo.style.backgroundPosition = `${x}% ${y}%`;
  };
  return (
    <section className="carousel">
      <div className="col-1-3 expanded-view-icons">
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
      <aside className="col-7-10 expanded-container">
        {left}
        <input id="zoom" type="checkbox" />
        <label htmlFor="zoom" className="zoom-background" onMouseMove={(e) => zoomHandler(e)} style={zoomStyle}>
          <img id="expanded-image" alt="" src={current.photos[currentImage].url} />
        </label>
        {right}
      </aside>
    </section>
  );
};
Expanded.propTypes = {
  current: PropTypes.shape().isRequired,
  click: PropTypes.func.isRequired,
  leftClick: PropTypes.func.isRequired,
  rightClick: PropTypes.func.isRequired,
  first: PropTypes.bool.isRequired,
  last: PropTypes.bool.isRequired,
  currentImage: PropTypes.number.isRequired,
};

export default Expanded;
