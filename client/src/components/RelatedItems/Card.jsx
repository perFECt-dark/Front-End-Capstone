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

      const newStyleUrl = `http://localhost:3000/item/${relatedCardId}`;
      axios
      .get(newStyleUrl)
      .then((infoToReturn) => {
        console.log('This is what info style data is: ', infoToReturn.data);
        setRelatedProductStyle(infoToReturn.data);
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
            <img
              className="image-object"
              alt={`for ${relatedProductData.productInfo}`}
              src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            />
          </div>
          <div className="card-info">
            Category:
            {relatedProductData.productInfo.category}
            <br />
            Name:
            {relatedProductData.productInfo.name}
            <br />
            Price: $
            {relatedProductData.productInfo.default_price}
            <br />
            Rating: ⭐⭐⭐⭐ (Just for show)
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
