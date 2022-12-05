/* eslint-disable react/prop-types */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
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
  const [currentImage, setCurrentImage] = useState('"https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"');
  const styleClickHandler = (event) => {
    const styleImage = event.target.src;
    const styleIndex = event.target.name;
    setCurrentStyle(styleIndex);
    setCurrentImage(styleImage);
  };
  const thumbnailClickHandler = (event) => {
    const clickedThumbnail = event.target.src;
    setCurrentImage(clickedThumbnail);
  };

  const largePic = {
    width: '50%',
    height: '800px',
    backgroundSize: '100% 100%',
    backgroundImage: `url(${currentImage})`,
    marginLeft: '90px',
  };
  return (
    <section className="row">
      <div className="grid">
        <section>
          <div className="col-2-3 main-image" style={largePic}>
            <Gallery current={styles.results[currentStyle]} click={thumbnailClickHandler} />
          </div>
          <aside className="col-1-3" style={{ height: '800px', position: 'relative', float: 'right' }}>
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
