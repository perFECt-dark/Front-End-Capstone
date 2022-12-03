/* eslint-disable import/extensions */
import './Overview/overview.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Reviews from './Reviews.jsx';
import Overview from './Overview/Overview.jsx';

function App() {

  const [productData, setProductData] = useState(null);

  // const [productData, setProductData] = useState({
  //   meta: null,
  //   reviews: null,
  //   productInfo: null,
  //   productStyles: null,
  //   relatedProducts: null,
  //   questions: null
  // });

  function grabInfo(product_id) {
    var newUrl = 'http://localhost:3000/item/' + product_id;
    axios.get(newUrl)
    .then((update) => {
      console.log('Here is our grabinfo: ', update.data);
      setProductData(update.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {

    /// This effect inciates page with data
    grabInfo(40344);

  },[]);



  return (
    <div>
      <header className="primary-header container group" style={{backgroundColor: 'blue'}}>

        <h1 className="logo">
            <a href="index.html">Perfect<br></br>Dark</a>
        </h1>

        <h3 className="tagline">_______________ Search</h3>

      </header>
      {productData === 'Dont Render' && <Reviews metaData={productData.meta} reviewData={productData.reviews} />}
      {productData !== null
      && <Overview info={productData.productInfo} styles={productData.productStyles} />}
      <FontAwesomeIcon icon={regular('star')} size="6x" />
    </div>

  );
}

export default App;
