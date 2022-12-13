import _, { map } from 'underscore';
import propTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import YourOutfitCard from './YourOutfitCard';
import AddProductCard from './AddProductCard';

function YourOutfitList({ productId }) {
  const [outfitIds, setOutfitIds] = useState(JSON.parse(localStorage.getItem('outfits')) || []);
  // outfitIds.push(40344);
  function handleAddProduct() {
    if (outfitIds.indexOf(productId) === -1) {
      outfitIds.push(productId);
      localStorage.setItem('outfits', JSON.stringify(outfitIds));
    }
  }
  function handleDeleteId(oldProductId) {
    const index = outfitIds.indexOf(oldProductId);
    outfitIds.splice(index, 1);
    localStorage.setItem('outfits', JSON.stringify(outfitIds));
  }

  useEffect(() => {
    console.log('These are the outfitIds', outfitIds);
  }, []);

  return (
    <section className="card-row">
      <div className="card-grid">
        <section>
          <div className="card-title">
            Your Outfit
          </div>
          <AddProductCard addToOutfits={handleAddProduct} />
          { outfitIds.length > 0
            && outfitIds.map((someCardId) => (
              <YourOutfitCard
                yourOutfitId={Number(someCardId)}
              />
            ))}

          {outfitIds.length > 0
            && console.log('These are the outfitIds in the return', outfitIds)}
        </section>
      </div>
    </section>
  );
}

YourOutfitList.propTypes = {
  productId: propTypes.string.isRequired,
  // styles: propTypes.shape().isRequired,
  // cards: propTypes.arrayOf(propTypes.number).isRequired,
  // characteristics: propTypes.shape().isRequired,
};

export default YourOutfitList;
