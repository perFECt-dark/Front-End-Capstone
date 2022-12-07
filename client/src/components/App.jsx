import './Overview/overview.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro';
import Reviews from './Review/Reviews';
import Overview from './Overview/Overview';
import RelatedProductsList from './RelatedItems/RelatedProductsList';
// if you have the css file in another place, make sure to update the path and it's name if needed
import '../styles.css';
import './RelatedItems/relatedItems.css';

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

  // this grabs the info of an product using its id and updates the page to view that product
  function grabInfo(productId) {
    const newUrl = `http://localhost:3000/item/${productId}`;
    axios
      .get(newUrl)
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
    const initialProduct = 40344;
    grabInfo(initialProduct);
  }, []);

  // <FontAwesomeIcon icon={regular('star')} className="star" size='6x' />
  return (
    <div>
      <header
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
        {/* placeholder search */}
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

      {/* Related Items */}
      {productData !== null
      && <RelatedProductsList cards={productData.relatedProducts} />}

      {/* {productData !== null
      && console.log('TEST', getInfoFromId(40344))} */}

      {/* Review */}
      {/* {productData !== null
      && <Reviews metaData={productData.meta} reviewData={productData.reviews} />} */}
    </div>

  );
}

export default App;
