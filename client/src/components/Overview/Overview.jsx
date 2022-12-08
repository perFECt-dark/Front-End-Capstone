/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import Gallery from './Gallery';
import Expanded from './Expanded';
import Information from './Information';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';

const Overview = ({ info, styles, reviews }) => {
  /*
  styles has
    product_id
    results
      [
        { style_id: 240500,
        name: 'Forest Green & Black',
        original_price: '140.00',
        sale_price: null,
        default?: true,
        photos: [ { thumbnail_url: like 5 unsplash photos }],
        skus: 1394769: {quantity: 8, size: 'XS'},
       }, ...
      ]
  expansion - setting new width of image with own set of features such as
  a hover, a zoom feature, and disabling some other things
  */
  const [currentStyle, setCurrentStyle] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [first, setFirst] = useState(true);
  const [last, setLast] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const checkFirstAndLast = () => {
    if (currentImage === 0) {
      setFirst(true);
    } else {
      setFirst(false);
    }
    if (currentImage >= styles.results[currentStyle].photos.length - 1) {
      setLast(true);
    } else {
      setLast(false);
    }
  };
  const styleClickHandler = (event) => {
    const styleIndex = Number(event.target.name);
    setFirst(true);
    setLast(false);
    setCurrentStyle(styleIndex);
    setCurrentImage(0);
  };
  const thumbnailClickHandler = (event) => {
    const clickedIndex = Number(event.target.name);
    checkFirstAndLast();
    if (clickedIndex === 0) {
      setFirst(true);
      setLast(false);
    } else if (clickedIndex === styles.results[currentStyle].photos.length - 1) {
      setLast(true);
      setFirst(false);
      setCurrentImage(clickedIndex);
    } else {
      setFirst(false);
      setLast(false);
    }
    setCurrentImage(clickedIndex);
  };
  const leftClick = () => {
    let leftIndex = Number(currentImage);
    checkFirstAndLast();
    if (currentImage > 0) {
      leftIndex = currentImage - 1;
      if (leftIndex === 0) {
        setFirst(true);
      }
      setLast(false);
      setCurrentImage(leftIndex);
    }
  };
  const rightClick = () => {
    let rightIndex = Number(currentImage);
    checkFirstAndLast();
    if (rightIndex + 1 >= styles.results[currentStyle].photos.length - 1) {
      setLast(true);
      setCurrentImage(rightIndex + 1);
    } else {
      rightIndex += 1;
      setFirst(false);
      setCurrentImage(rightIndex);
    }
  };
  // expand default image on click
  let overviewModal = document.getElementById('expand-modal');
  const expandClick = () => {
    if (overviewModal === null) {
      overviewModal = document.getElementById('expand-modal');
    }
    setExpanded(true);
    overviewModal.style.display = 'block';
  };
  // switch back to default image on click
  const expandClose = (event) => {
    if (overviewModal !== null && (event.target !== overviewModal || event.target.className === 'close-expanded')) {
      overviewModal.style.display = 'none';
    }
    setExpanded(false);
  };
  const defaultPic = {
    width: '60%',
    height: '700px',
  };
  const rightSide = {
    height: '700px',
    position: 'relative',
    float: 'right',
  };
  return (
    <section className="row">
      <div className="grid">
        <section>
          <div className="col-2-3" style={defaultPic}>
            <Gallery
              current={styles.results[currentStyle]}
              currentImage={currentImage}
              click={thumbnailClickHandler}
              leftClick={leftClick}
              rightClick={rightClick}
              first={first}
              last={last}
              expandClick={expandClick}
              expanded={expanded}
            />
            <div id="expand-modal" className="overview-modal">
              <div className="expanded-content" name="">
                <span className="close-expanded" onClick={(e) => expandClose(e)}>X</span>
                <Expanded
                  current={styles.results[currentStyle]}
                  currentImage={currentImage}
                  click={thumbnailClickHandler}
                  leftClick={leftClick}
                  rightClick={rightClick}
                  first={first}
                  last={last}
                  expanded={expanded}
                />
              </div>
            </div>
          </div>
          <aside className="col-1-3" style={rightSide}>
            <Information info={info} current={styles.results[currentStyle]} reviews={reviews} />
            <StyleSelector style={styles} click={styleClickHandler} currentStyle={currentStyle} />
            <AddToCart />
          </aside>
        </section>
        <section style={{ paddingTop: '20px' }} onClick={(e) => expandClose(e)}>
          <div className="col-2-3">
            <h3>{info.slogan}</h3>
            <p>{info.description}</p>
          </div>
          <aside className="col-1-3">
            {info.features.length !== 0 && info.features.map((feat) => (
              <section className="item-features" key={feat.feature}>
                <p className="item-feature">{feat.feature}</p>
                -
                <p className="item-feature" style={{ marginLeft: '15px' }}>{feat.value}</p>
              </section>
            ))}
            <div>
              Share to:
              <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="fb" className="shared-icons" />
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="insta" className="shared-icons" />
              <img src="https://cdn-icons-png.flaticon.com/512/3536/3536559.png" alt="pin" className="shared-icons" />
            </div>
          </aside>
        </section>
      </div>
    </section>
  );
};

export default Overview;
