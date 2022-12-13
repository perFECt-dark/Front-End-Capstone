import React from 'react';
import propTypes from 'prop-types';

function AddProductCard({ addToOutfits }) {
  return (
    <div className="card" onClick={addToOutfits}>
      <div> ADD TO OUTFITS</div>
    </div>
  );
}

AddProductCard.propTypes = {
  addToOutfits: propTypes.func.isRequired,
};

export default AddProductCard;
