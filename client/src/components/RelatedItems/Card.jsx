import propTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProductsModal from './RelatedProductsModal';
import StarDisplay from '../StarDisplay';

function Card({
  productName, styles, relatedCardId, characteristics, grabInfo,
}) {
  const [relatedProductData, setRelatedProductData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function findAverageRating(ratings) {
    const totalRatings = Number(ratings['1'])
    + Number(ratings['2'])
    + Number(ratings['3'])
    + Number(ratings['4'])
    + Number(ratings['5']);
    let total = (Number(ratings['1']) * 1)
    + (Number(ratings['2']) * 2)
    + (Number(ratings['3']) * 3)
    + (Number(ratings['4']) * 4)
    + (Number(ratings['5']) * 5);

    total /= totalRatings;
    total = Math.round(total * 10) / 10;

    // console.log('total ratings: ', totalRatings);
    // console.log('total ',total);

    return total;
  }
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
    <aside className="card" onClick={() => grabInfo(relatedProductData.productInfo.id)}>
      {relatedProductData !== null && (
        <div>
          <div className="image-card">
            <button className="card-action-button" onClick={() => {setIsOpen(true)}}>Button</button>
            {(isOpen && characteristics !== null)
            && (
              <RelatedProductsModal
                productName={productName}
                styles={styles}
                setIsOpen={setIsOpen}
                currentCharacteristics={characteristics}
                relatedName={relatedProductData.productInfo.name}
                relatedCharacteristics={relatedProductData.meta.characteristics}
                relatedStyles={relatedProductData.productStyles}
              />
            )}
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
            <StarDisplay size={16} val={findAverageRating(relatedProductData.meta.ratings)} />
          </div>
        </div>
      )}
    </aside>
  );
}

Card.propTypes = {
  productName: propTypes.string.isRequired,
  styles: propTypes.shape().isRequired,
  relatedCardId: propTypes.number.isRequired,
  characteristics: propTypes.shape(),
  grabInfo: propTypes.func.isRequired,
};
Card.defaultProps = {
  characteristics: null,
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