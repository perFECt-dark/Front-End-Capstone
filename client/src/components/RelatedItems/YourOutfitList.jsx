import propTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import YourOutfitCard from './YourOutfitCard';

function YourOutfitList({
  productName, styles, cards, characteristics,
}) {
  const [outfits, setOutfits] = useState([]);

  useEffect(() => {

  });
  return (
    <section className="card-row">
      <div className="card-grid">
        <section>
          <div className="card-title">
            Your Outfit
          </div>
          { cards.map((someCardId) => (
            <YourOutfitCard
              productName={productName}
              styles={styles}
              relatedCardId={someCardId}
              characteristics={characteristics}
            />
          ))}
        </section>
      </div>
    </section>
  );
}

YourOutfitList.propTypes = {
  productName: propTypes.string.isRequired,
  styles: propTypes.shape().isRequired,
  cards: propTypes.arrayOf(propTypes.number).isRequired,
  characteristics: propTypes.shape().isRequired,
};

export default YourOutfitList;
