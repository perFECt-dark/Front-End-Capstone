import propTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Card({ relatedCardId }) {
  const [relatedProductData, setRelatedProductData] = useState(null);
  const [relatedProductStyle, setRelatedProductStyle] = useState(null);

  useEffect(() => {
    const newUrl = `http://localhost:3000/item/${relatedCardId}`;
    axios
      .get(newUrl)
      .then((infoToReturn) => {
        console.log('This is what info data is: ', infoToReturn.data);
        setRelatedProductData(infoToReturn.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <aside className="card">
      {relatedProductData !== null && (
        <div>
          <div className="image-card">
          <button className='card-action-button'>Button</button>
            <img
              className="card-image-object"
              alt={`for ${relatedProductData.productInfo.name}`}
              src={relatedProductData.productStyles.results[0].photos[0].url ? `${relatedProductData.productStyles.results[0].photos[0].url}` : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}
            />
          </div>
          <div className="card-info">
            {relatedProductData.productInfo.category}
            <br />
            {relatedProductData.productInfo.name}
            <br />
            Price: $
            {relatedProductData.productStyles.results[0].sale_price !== null
              ? relatedProductData.productStyles.results[0].sale_price
              : relatedProductData.productStyles.results[0].original_price}
            {relatedProductData.productStyles.results[0].sale_price
              && <aside className="card-default-strikeout">{relatedProductData.productStyles.results[0].original_price}</aside>}
            <br />
            ⭐⭐⭐⭐ (implement)
          </div>
        </div>
      )}
    </aside>
  );
}

Card.propTypes = {
  relatedCardId: propTypes.number.isRequired,
};

export default Card;

// { relatedProductData.productStyles.results[0].sale_price)
// }
// {relatedProductData.productStyles.results[0].sale_price === null
//   ? (
//     {relatedProductData.productStyles.results[0].sale_price}

//     <aside className="card-sale-price">
//       {relatedProductData.productInfo.default_price}
//     </aside>
//   )
//   : relatedProductData.productInfo.default_price }