import propTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import YourOutfitCard from './YourOutfitCard';
import AddProductCard from './AddProductCard';

function YourOutfitList({ productId, grabInfo }) {
  const [outfitIds, setOutfitIds] = useState(JSON.parse(window.localStorage.getItem('outfits')) || []);
  function handleAddProduct() {
    if (outfitIds.indexOf(productId) === -1) {
      const temp = [...outfitIds, productId];
      window.localStorage.setItem('outfits', JSON.stringify(temp));
      setOutfitIds(current => [...current, productId]);
    }
  }
  function handleDeleteId(oldProductId) {
    const temp = outfitIds.filter((id) => id !== oldProductId);
    console.log('This is temp in delete function', temp);
    window.localStorage.setItem('outfits', JSON.stringify(temp));
    setOutfitIds(temp);
    console.log('This it outfitIds at the end of delete function', outfitIds);
    console.log('This it temp at the end of delete function', temp);
  }

  return (
    <section className="card-row">
      <div className="card-grid">
        <section>
          <div className="card-title">
            Your Outfit
          </div>
          {console.log('These are the outfitIds in the return', outfitIds)}
          {console.log('This is what is in localStorage.outfits', window.localStorage.getItem('outfits'))}
          <AddProductCard addToOutfits={handleAddProduct} />
          { outfitIds.length > 0
            && outfitIds.map((someCardId) => (
              <YourOutfitCard
                yourOutfitId={Number(someCardId)}
                grabInfo={grabInfo}
                handleDeleteId={handleDeleteId}
              />
            ))}
        </section>
      </div>
    </section>
  );
}

YourOutfitList.propTypes = {
  productId: propTypes.string.isRequired,
  grabInfo: propTypes.func.isRequired,
};

export default YourOutfitList;
