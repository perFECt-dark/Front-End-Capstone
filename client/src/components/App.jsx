import React, {useEffect, useState} from 'react';
import Reviews from './Reviews.jsx';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import React from 'react';
// if you have the css file in another place, make sure to update the path and it's name if needed
//import '../../dist/styles.css';

//import Card from './Card.jsx';

function App() {
  // const sampleData = {
  //   "product_id": "1",
  //   "results": [
  //     {
  //       "style_id": 1,
  //       "name": "Forest Green & Black",
  //       "original_price": "140",
  //       "sale_price": "0",
  //       "default?": true,
  //       "photos": [
  //         {
  //           "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
  //           "url": "urlplaceholder/style_1_photo_number.jpg"
  //         },
  //         {
  //           "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
  //           "url": "urlplaceholder/style_1_photo_number.jpg"
  //         }
  //         // ...
  //       ],
  //       "skus": {
  //         "37": {
  //           "quantity": 8,
  //           "size": "XS"
  //         },
  //         "38": {
  //           "quantity": 16,
  //           "size": "S"
  //         },
  //         "39": {
  //           "quantity": 17,
  //           "size": "M"
  //         },
  //         //...
  //       }
  //     },
  //     {
  //       "style_id": 2,
  //       "name": "Desert Brown & Tan",
  //       "original_price": "140",
  //       "sale_price": "0",
  //       "default?": false,
  //       "photos": [
  //         {
  //           "thumbnail_url": "urlplaceholder/style_2_photo_number_thumbnail.jpg",
  //           "url": "urlplaceholder/style_2_photo_number.jpg"
  //         }
  //         // ...
  //       ],
  //       "skus": {
  //         "37": {
  //           "quantity": 8,
  //           "size": "XS"
  //         },
  //         "38": {
  //           "quantity": 16,
  //           "size": "S"
  //         },
  //         "39": {
  //           "quantity": 17,
  //           "size": "M"
  //         },
  //       }
  //     },
  //   ]
  // };

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
  //use this to grab initial data
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
      {productData === 'Dont Render' && <Reviews metaData={productData.meta} reviewData={productData.reviews}/>}
      <FontAwesomeIcon icon={regular('star')} size="6x" />
  </div>

  );
}

export default App;
