import React from 'react';
import propTypes from 'prop-types';

function AddProductCard({ addToOutfits }) {
  return (
    <aside className="card add-product-card" onClick={addToOutfits}>
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
    </aside>
  );
}

AddProductCard.propTypes = {
  addToOutfits: propTypes.func.isRequired,
};

export default AddProductCard;
