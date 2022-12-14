import React from 'react';
import propTypes from 'prop-types';

function AddProductCard({ addToOutfits }) {
  return (
    <aside className="card add-product-card" onClick={addToOutfits}>
      <div> ADD TO OUTFITS</div>
    </aside>
  );
}

AddProductCard.propTypes = {
  addToOutfits: propTypes.func.isRequired,
};

export default AddProductCard;
