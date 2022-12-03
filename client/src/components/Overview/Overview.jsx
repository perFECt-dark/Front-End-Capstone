/* eslint-disable react/prop-types */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { useState, useEffect } from 'react';
import Gallery from './Gallery.jsx';
import Information from './Information.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

const Overview = ({ info, styles }) => {
  /* need a usestate for current selected style
  FOR SELECTED STYLE I NEED TO SHOW
    IMAGE
    STAR RATING
    PRODUCT CATEGORY
    PRODUCT TITLE
    PRODUCT PRICE
    PRODUCT DESCRIPTION
    SHARE ON SOCIAL MEDIA

    STYLE SELECTOR
      STYLES

    ADD TO CART
      SIZE DROPDOWN
      QUANTITY DROPDOWN
      ADD TO CART BUTTON
    */
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
  const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(() => {
    const currentStyle = styles.results[0].style_id;
    setCurrentProduct(styles);
  }, []);

  // incoming data
  return (
    <div id="overview-container">
      <Gallery current={currentProduct} />
      <div className="right-col-container">
        <Information />
        <StyleSelector />
        <AddToCart />
      </div>
      <div id="description-box">
        Description
      </div>
      <div id="share-buttons">
        Share to:
        <div className="facebook" />
        <div className="instagram" />
        <div className="pinterest" />
      </div>
    </div>
  );
};

export default Overview;
