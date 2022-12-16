import propTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { GiCancel } from 'react-icons/gi';
import axios from 'axios';
import StarDisplay from '../StarDisplay';

function YourOutfitCard({ yourOutfitId, grabInfo, handleDeleteId }) {
  const [relatedProductData, setRelatedProductData] = useState(null);

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
    const newUrl = `http://localhost:3000/item/${yourOutfitId}/card`;
    axios
      .get(newUrl)
      .then((infoToReturn) => {
        console.log('This is what related product info is: ', infoToReturn.data);
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
            <button className="card-action-button" onClick={() => {handleDeleteId(relatedProductData.meta.product_id)}}>
              <GiCancel size={18} />
            </button>
            <img
              className="card-image-object"
              alt={`for ${relatedProductData.productInfo.name}`}
              onClick={() => {
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
    </aside>
  );
}

YourOutfitCard.propTypes = {
  yourOutfitId: propTypes.number.isRequired,
  grabInfo: propTypes.func.isRequired,
  handleDeleteId: propTypes.func.isRequired,
};
YourOutfitCard.defaultProps = {
  // characteristics: null,
};

export default YourOutfitCard;
