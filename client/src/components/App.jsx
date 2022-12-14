import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import QA from './QA/QA';
import Reviews from './Review/Reviews';
import Overview from './Overview/Overview';
import StarRating from './StarRating';
import StarDisplay from './StarDisplay';
import RelatedProductsList from './RelatedItems/RelatedProductsList';

// if you have the css file in another place, make sure to update the path and it's name if needed
import '../styles.css';
import './Overview/overview.css';
import './RelatedItems/relatedItems.css';
import YourOutfitList from './RelatedItems/YourOutfitList';
import YourOutfitCard from './RelatedItems/YourOutfitCard';

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
    const newUrl = `http://ec2-52-41-185-16.us-west-2.compute.amazonaws.com:3000/item/${productId}`;
    axios
      .get(newUrl)
      .then((update) => {
        console.log('Here is our grabinfo: ', update.data);
        setProductData(update.data);
      })
      .catch((err) => {
        console.log(err);
        console.log('For some reason. We did not get the data!');
      });
  }

  // use this to grab initial data
  useEffect(() => {
    /// This effect inciates page with data
    const initialProduct = 40346;
    /// base product 40346
    /// infinity stone 40353
    /// no image sunglasses 40345
    grabInfo(initialProduct);
  }, []);

  // <FontAwesomeIcon icon={regular('star')} className="star" size='6x' />
  return (
    <div>
      <header
        className="primary-header container group"
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

      {/* Overview */}
      {productData !== null
        && (
          <Overview
            info={productData.productInfo}
            styles={productData.productStyles}
            reviews={productData.reviews}
            meta={productData.meta}
            StarDisplay={StarDisplay}
          />
        )}

      {/* Related Items */}
      {productData !== null
      && (
        <div>
          <RelatedProductsList
            productName={productData.productInfo.name}
            styles={productData.productStyles}
            cards={productData.relatedProducts}
            characteristics={productData.meta.characteristics}
            grabInfo={grabInfo}
          />
          <YourOutfitList productId={productData.meta.product_id} grabInfo={grabInfo} />
        </div>
      )}
      {/* Questions & Answers */}
      <div>
        {productData !== null && <QA productInfo={productData.productInfo} />}
      </div>
      {/* Review */}
      {productData !== null
      && (
      <Reviews
        metaData={productData.meta}
        reviewData={productData.reviews}
        title={productData.productInfo.name}
      />
      )}
    </div>
  );
}

export default App;
