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
import Reviews from './Reviews';
import Overview from './Overview/Overview';
import CardList from './RelatedItems/CardList';
// if you have the css file in another place, make sure to update the path and it's name if needed
import '../styles.css';
import './RelatedItems/relatedItems.css';

function App() {
  const [productData, setProductData] = useState(null);
  const [AnotherProductData, setAnotherProductData] = useState(null);
  const [relatedProductData, setRelatedProductData] = useState([]);
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

  // this grabs the info of an product using its id and updates the page to view that product
  function getInfoFromId(productId) {
    const newUrl = `http://localhost:3000/item/${productId}`;
    axios
      .get(newUrl)
      .then((infoToReturn) => {
        console.log('Here is our info being returned in getInfofromId: ', infoToReturn.data);
        setAnotherProductData(infoToReturn.data);
        return infoToReturn.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // this return an array of all the related products as objects
  function getRelatedProductsInfo() {
    const relatedProductsId = productData.relatedProducts;
    const relatedProducts = [];
    console.log('This is from getRelatedProductsInfo', relatedProductsId);
    // relatedProductsId.map((currentProductId) => { return getInfoFromId(currentProductId) })

    // relatedProductsId.forEach((currentId) => {
    //   const newUrl = `http://localhost:3000/item/${currentId}`;
    //   axios
    //     .get(newUrl)
    //     .then((infoToReturn) => {
    //       console.log('Here is our info being returned in getInfofromId: ', infoToReturn.data);
    //       relatedProducts.push(infoToReturn.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // });

    setRelatedProductData(relatedProducts);
  }

  // use this to grab initial data
  useEffect(() => {
    /// This effect inciates page with data
    const initialProduct = 40344;
    grabInfo(initialProduct);
    //getInfoFromId(productData.relatedProducts[0]);
  }, []);

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
      {/* Overview */}
      {productData !== null
      && (
      <Overview
        info={productData.productInfo}
        styles={productData.productStyles}
        reviews={productData.reviews}
      />
      )}

      {/* Related Items */}
      {AnotherProductData !== null
      && <CardList cards={[AnotherProductData.productInfo, AnotherProductData.productInfo]} />}

      {/* {productData !== null
      && console.log('TEST', getInfoFromId(40344))} */}

      {/* Review */}
      {productData !== null
      && <Reviews metaData={productData.meta} reviewData={productData.reviews} />}
    </div>

  );
}

export default App;
