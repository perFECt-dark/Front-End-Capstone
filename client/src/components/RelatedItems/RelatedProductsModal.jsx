import React from 'react';
import propTypes from 'prop-types';
import './relatedItems.css';

function RelatedProductsModal({ setIsOpen }) {
  return (
    <div className="related-products-modal">
      <div className="related-products-modal-content">
        <div className="related-products-modal-header">
          <div className="related-products-modal-title"> Compare </div>
        </div>
        <div className="related-products-modal-body">
          Body
        </div>
        <div className="related-products-modal-footer">
          <button className="modal-close-button" onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </div>
    </div>
  );
}

RelatedProductsModal.propTypes = {
  setIsOpen: propTypes.func.isRequired,
};

export default RelatedProductsModal;
