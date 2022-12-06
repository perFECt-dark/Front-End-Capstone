/* eslint-disable react/prop-types */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import Gallery from './Gallery.jsx';
import Information from './Information.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

const Overview = ({ info, styles, reviews }) => {
  /*
  info has
    category
    price
    description
    id
    name
    slogan

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
  */
  // incoming data
  /*
  expansion - setting new width of image with own set of features such as
  a hover, a zoom feature, and disabling some other things
  click handlers - States I need to keep track of/ things that change:
  the current style that is selected
  the set of thumbnails based off of the style selected
  the main image
  */
  const [currentStyle, setCurrentStyle] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [first, setFirst] = useState(true);
  const [last, setLast] = useState(false);
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

  const largePic = {
    width: '55%',
    height: '800px',
    backgroundSize: '90% auto',
    backgroundColor: 'rgb(230, 230, 230)',
    backgroundImage: `url(${styles.results[currentStyle].photos[currentImage].url})`,
    marginLeft: '90px',
    backgroundRepeat: 'no-repeat',
  };
  const rightSide = {
    height: '800px',
    position: 'relative',
    float: 'right',
  };
  return (
    <section className="row">
      <div className="grid">
        <section>
          <div className="col-2-3 main-image" style={largePic}>
            <Gallery
              current={styles.results[currentStyle]}
              click={thumbnailClickHandler}
              leftClick={leftClick}
              rightClick={rightClick}
              first={first}
              last={last}
            />
          </div>
          <aside className="col-1-3" style={rightSide}>
            <Information info={info} current={styles.results[currentStyle]} reviews={reviews} />
            <StyleSelector style={styles} click={styleClickHandler} currentStyle={currentStyle} />
            <AddToCart />
          </aside>
        </section>
        <section style={{ paddingTop: '20px' }}>
          <div className="col-2-3">
            <h3>{info.slogan}</h3>
            <p>{info.description}</p>
          </div>
          <aside className="col-1-3">
            {info.features.length !== 0 && info.features.map((feat) => (
              <p key={feat.feature}>
                {feat.feature}
                :
                {feat.value}
              </p>
            ))}
            <div>
              Share to:
              <div className="facebook" />
              <div className="instagram" />
              <div className="pinterest" />
            </div>
          </aside>
        </section>
      </div>
    </section>
  );
};

export default Overview;
