import React from 'react';
import propTypes from 'prop-types';

function AddProductCard({ addToOutfits }) {
  return (
    <aside className="card add-product-card" onClick={addToOutfits}>
      <div>
        <br />
        <br />
        ADD
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        TO
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        OUTFITS
      </div>
    </aside>
  );
}

AddProductCard.propTypes = {
  addToOutfits: propTypes.func.isRequired,
};

export default AddProductCard;
