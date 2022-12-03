import React, {useEffect, useState} from 'react';
import Reviews from './Reviews.jsx';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import React from 'react';
// if you have the css file in another place, make sure to update the path and it's name if needed
import '../../dist/styles.css';

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
    //grabInfo(40344);

  },[]);



  return (
    <div>
      <header className="primary-header container group" style={{backgroundColor: 'blue'}}>

        <h1 className="logo">
            <a href="index.html">Perfect<br></br>Dark</a>
        </h1>

        <h3 className="tagline">_______________ Search</h3>

      </header>
      {productData === 'Dont Render' && <Reviews metaData={productData.meta} reviewData={productData.reviews}/>}
      <FontAwesomeIcon icon={regular('star')} size="6x" />
  </div>

  );
}

export default App;
