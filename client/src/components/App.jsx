import './Overview/overview.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
// import '../styles.css';
import Reviews from './Review/Reviews';
import Overview from './Overview/Overview';
import Card from './Card';
import QA from './QA/QA';
// if you have the css file in another place, make sure to update the path and it's name if needed

function App() {
  const [productData, setProductData] = useState(null);

  // format of productData
  // const [productData, setProductData] = useState({
  //   meta: null,
  //   reviews: null,
  //   productInfo: null,
  //   productStyles: null,
  //   relatedProducts: null,
  //   questions: null
  // });

  function grabInfo(productId) {
    const newUrl = `http://localhost:3000/item/${productId}`;
    axios.get(newUrl)
      .then((update) => {
        console.log('Here is our grabinfo: ', update.data);
        setProductData(update.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // use this to grab initial data
  useEffect(() => {
    /// This effect inciates page with data
    grabInfo(40344);
  }, []);

  // <FontAwesomeIcon icon={regular('star')} className="star" size='6x' />
  return (
    <div>
      {/* <header
        className="primary-header container group"
        style={{ backgroundColor: 'blue' }}
      >
        <h1 className="logo">
          <a href="index.html">
            Perfect
            <br />
            Dark
          </a>
        </h1>
        placeholder search
        <h3 className="tagline">_______________ Search</h3>
      </header>
      {productData !== null
      && (
      <Overview
        info={productData.productInfo}
        styles={productData.productStyles}
        reviews={productData.reviews}
      />
      )}
      {productData !== null
      && <Reviews metaData={productData.meta} reviewData={productData.reviews} />} */}
      <div>
        {productData !== null && <QA productInfo={productData.productInfo} />}
      </div>
    </div>

  );
}

export default App;
