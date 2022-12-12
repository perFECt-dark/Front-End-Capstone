import propTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import YourOutfitCard from './YourOutfitCard';

function YourOutfitList() {
  // const [outfitIds, setOutfitIds] = useState([]);
  const outfitIds = [40344];

  function addId(newProductId) {
    outfitIds.push(newProductId);
  }
  useEffect(() => {
    outfitIds.push(40346);
    console.log('These are the outfitIds', outfitIds);
  }, []);

  return (
    <section className="card-row">
      <div className="card-grid">
        <section>
          <div className="card-title">
            Your Outfit
          </div>
          { outfitIds.map((someCardId) => (
            <YourOutfitCard
              yourOutfitId={someCardId}
            />
          ))}
        </section>
      </div>
    </section>
  );
}

YourOutfitList.propTypes = {
  // productName: propTypes.string.isRequired,
  // styles: propTypes.shape().isRequired,
  // cards: propTypes.arrayOf(propTypes.number).isRequired,
  // characteristics: propTypes.shape().isRequired,
};

export default YourOutfitList;
