import propTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function YourOutfitCard({ yourOutfitId }) {
  const [relatedProductData, setRelatedProductData] = useState(null);
  //const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const newUrl = `http://localhost:3000/item/${yourOutfitId}`;
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
    <aside className="card" onClick={() => console.log('Hello')}>
      {relatedProductData !== null && (
        <div>
          <div className="image-card">
            <button className="card-action-button" onClick={() => {setIsOpen(true)}}>Button</button>
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

YourOutfitCard.propTypes = {
  // productName: propTypes.string.isRequired,
  // styles: propTypes.shape().isRequired,
  yourOutfitId: propTypes.number.isRequired,
  // characteristics: propTypes.shape(),
  // actionButton: propTypes.func.isRequired,
};
YourOutfitCard.defaultProps = {
  // characteristics: null,
};

export default YourOutfitCard;

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