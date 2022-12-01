/* eslint-disable react/function-component-definition */
import React from 'react';
import { useState } from 'react';
import Gallery from './Gallery.jsx';
import Information from './Information.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

const Overview = () => {
  /* n eed a usestate for current selected style
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
  const [product, setProduct] = useState([]);

  return (
    <div>
      Overview
      <Gallery />
      <Information />
      <StyleSelector />
      <AddToCart />
      <div id="description-box">
        Description
      </div>
    </div>
  );
};

export default Overview;
