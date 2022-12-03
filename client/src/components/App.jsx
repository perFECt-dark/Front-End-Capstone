import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Reviews from './Reviews.jsx';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
// if you have the css file in another place, make sure to update the path and it's name if needed
import '../styles.css';
import Card from './Card.jsx';

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

  function grabInfo(product_id) {
    const newUrl = 'http://localhost:3000/item/' + product_id;
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

  return (
    <div>
      <header className="primary-header container group" style={{ backgroundColor: 'blue' }}>

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
      {productData === 'Dont Render' && <Reviews metaData={productData.meta} reviewData={productData.reviews} />}
      <FontAwesomeIcon icon={regular('star')} size="6x" />
      <Card product={productData} />
    </div>
  );
}

export default App;
