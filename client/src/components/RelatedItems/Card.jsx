import propTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import RelatedProductsModal from './RelatedProductsModal';
import StarDisplay from '../StarDisplay';

function Card({
  productName, styles, relatedCardId, characteristics, grabInfo, setIndex, displayModal
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

    return total;
  }
  useEffect(() => {
    const newUrl = `http://ec2-52-41-185-16.us-west-2.compute.amazonaws.com:3000/item/${relatedCardId}/card`;
    axios
      .get(newUrl)
      .then((infoToReturn) => {
        console.log('This is what info data is: ', infoToReturn.data);
        setRelatedProductData(infoToReturn.data);
      })
      .catch((err) => {
        console.log(err);
        console.log('For some reason. We did not get the data!');
      });
  }, []);
  return (
    <aside className="card">
      {relatedProductData !== null && (
        <div>
          <div className="image-card">
            <button className="card-action-button" onClick={() => { displayModal(productName, styles, true, characteristics, relatedProductData.productInfo.name, relatedProductData.meta.characteristics, relatedProductData.productStyles) }}>
              <FaStar size={18} />
            </button>
            <img
              className="card-image-object"
              alt={`for ${relatedProductData.productInfo.name}`}
              onClick={() => {
                setIndex(0);
                grabInfo(relatedProductData.productInfo.id);
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                });
              }}
              src={relatedProductData.productStyles.results[0].photos[0].url ? `${relatedProductData.productStyles.results[0].photos[0].url}` : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}
            />
          </div>
          <div
            className="card-info"
            onClick={() => {
              setIndex(0);
              grabInfo(relatedProductData.productInfo.id);
                window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              });
            }}
            >
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
      {/* {(isOpen && characteristics !== null)
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
            )} */}
    </aside>
  );
}

Card.propTypes = {
  productName: propTypes.string.isRequired,
  styles: propTypes.shape().isRequired,
  relatedCardId: propTypes.number.isRequired,
  characteristics: propTypes.shape(),
  grabInfo: propTypes.func.isRequired,
  // setIndex: propTypes.func.isRequired,
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