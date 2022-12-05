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

const Overview = ({info, styles}) => {
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
  const [currentProduct, setCurrentProduct] = useState({
    product_id: 'null',
    results: [],
  });
  const [currentInfo, setCurrentInfo] = useState({
    category: 'null',
    default_price: 'null',
    description: 'null',
    features: [],
    name: 'null',
    slogan: 'null',
  });
  const [meta, setMeta] = useState([]);

  useEffect(() => { }, [meta]);
  const largePic = {
    width: '50%',
    height: '800px',
    backgroundSize: '100% 100%',
    // backgroundImage: 'url("https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80")',
    backgroundImage: 'url("https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80")',
  };
  // incoming data
  return (
    <section className="row">
      <div className="grid">
        <section>
          <div className="col-2-3" style={largePic}>
            <Gallery current={currentProduct} />
          </div>
          <aside className="col-1-3" style={{ height: '800px', position: 'relative', float: 'right' }}>
            <Information info={info} />
            <StyleSelector style={styles} />
            <AddToCart />
          </aside>
        </section>
        <section style={{ paddingTop: '20px' }}>
          <div className="col-2-3">
            <h3>{info.slogan}</h3>
            <p>{info.description}</p>
          </div>
          <aside className="col-1-3">
            <p>Features I will put</p>
            {info.features.length !== 0 && info.features.map((feat) => (
              <p>
                {feat.feature}
                -
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
