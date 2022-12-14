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
  current, click, leftClick, rightClick, first, last, currentImage, expanded,
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
  // background for zoom handler
  const zoomStyle = {
    backgroundImage: `url(${current.photos[currentImage].url})`,
  };
  // 2.5x zoom handler
  const zoomHandler = (event) => {
    if (event.target.htmlFor !== 'zoom' && event.target.id !== 'expanded-image') {
      return;
    }
    // set target to be the label
    const zoomTo = event.target;
    let offsetX;
    let offsetY;
    // if there is an offset, set variable respectively
    if (offsetX || offsetY) {
      const x = (offsetX / zoomTo.offsetWidth) * 100;
      const y = (offsetY / zoomTo.offsetHeight) * 100;
      zoomTo.style.backgroundPosition = `${x}% ${y}%`;
      return;
    }
    if (event.nativeEvent.offsetX) {
      offsetX = event.nativeEvent.offsetX;
    } else {
      offsetX = event.nativeEvent.pageX;
    }
    if (event.nativeEvent.offsetY) {
      offsetY = event.nativeEvent.offsetY;
    } else {
      offsetY = event.nativeEvent.pageY;
    }
    // calculate percentage of background to show
    const x = (offsetX / zoomTo.offsetWidth) * 100;
    const y = (offsetY / zoomTo.offsetHeight) * 100;
    zoomTo.style.backgroundPosition = `${x}% ${y}%`;
  };
  let icons;
  if (expanded) {
    icons = 'thumbnail-icon small-icons';
  } else {
    icons = 'thumbnail-icon';
  }
  return (
    <section className="carousel">
      <div className="col-1-3 expanded-view-icons">
        {current.photos.map((pic, index) => {
          const key = pic.thumbnail_url + index;
          return (
            <Thumbnail
              index={index}
              url={pic.thumbnail_url}
              key={key}
              click={click}
              currentImage={currentImage}
              icons={icons}
            />
          );
        })}
      </div>
      <aside className="col-7-10 expanded-container" onMouseMove={(e) => zoomHandler(e)}>
        {left}
        {/* <div className="hide-background" /> */}
        <input id="zoom" type="checkbox" />
        <label htmlFor="zoom" className="zoom-background" onFocus={(e) => zoomHandler(e)} onMouseOver={(e) => zoomHandler(e)} style={zoomStyle}>
          <img id="expanded-image" alt="" src={current.photos[currentImage].url} onClick={(e) => zoomHandler(e)} />
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
  expanded: PropTypes.bool.isRequired,
};

export default Expanded;
