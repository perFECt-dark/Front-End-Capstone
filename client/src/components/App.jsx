import React, {useEffect, useState} from 'react';
import Reviews from './Reviews.jsx';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import '../styles.css';

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


  // <FontAwesomeIcon icon={regular('star')} className="star" size='6x' />
  return (
    <div>
      <header className="primary-header container group" style={{backgroundColor: 'blue'}}>

        <h1 className="logo">
            <a href="index.html">Perfect<br></br>Dark</a>
        </h1>

        <h3 className="tagline">_______________ Search</h3>

      </header>
      {productData !== null && <Reviews metaData={productData.meta} reviewData={productData.reviews}/>}

  </div>

  );
}

export default App;
