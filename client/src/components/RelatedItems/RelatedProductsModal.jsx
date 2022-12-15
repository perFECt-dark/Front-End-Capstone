import React from 'react';
import propTypes from 'prop-types';
import './relatedItems.css';

function RelatedProductsModal({
  productName, styles, setIsOpen, currentCharacteristics, relatedName, relatedCharacteristics, relatedStyles,
}) {
  return (
    <div className="related-products-modal">
      <div className="related-products-modal-content">
        <div className="related-products-modal-header">
          <div className="related-products-modal-title"> Compare </div>
        </div>
        <div className="related-products-modal-body">
          <div className="related-products-modal-current-product-section">
            <div className="related-products-modal-section-title">
              <div className="related-products-modal-section-product-name">{productName}</div>
              <div className="related-products-modal-section-product-style">{styles.results[0].name}</div>
            </div>
            <ul>
              {(currentCharacteristics.Size && relatedCharacteristics.Size)
                && (
                  Math.round(currentCharacteristics.Size.value * 10) / 10
                )}
            </ul>
            <ul>
              {(currentCharacteristics.Width && relatedCharacteristics.Width)
              && (
                Math.round(currentCharacteristics.Width.value * 10) / 10
              )}
            </ul>
            <ul>
              {(currentCharacteristics.Comfort && relatedCharacteristics.Comfort)
              && (
                Math.round(currentCharacteristics.Comfort.value * 10) / 10
              )}
            </ul>
            <ul>
              {(currentCharacteristics.Quality && relatedCharacteristics.Quality)
              && (
                Math.round(currentCharacteristics.Quality.value * 10) / 10
              )}
            </ul>
            <ul>
              {(currentCharacteristics.Length && relatedCharacteristics.Length)
              && (
                Math.round(currentCharacteristics.Length.value * 10) / 10
              )}
            </ul>
            <ul>
              {(currentCharacteristics.Fit && relatedCharacteristics.Fit)
              && (
                Math.round(currentCharacteristics.Fit.value * 10) / 10
              )}
            </ul>
          </div>
          <aside className="related-products-modal-characteristic-section">
            <div className="related-products-modal-section-product-name">
              Characteristic
            </div>
            <br />
            {(currentCharacteristics.Size && relatedCharacteristics.Size) && <ul>Size</ul> }
            {(currentCharacteristics.Width && relatedCharacteristics.Width) && <ul>Width</ul> }
            {(currentCharacteristics.Comfort && relatedCharacteristics.Comfort)
              && <ul>Comfort</ul> }
            {(currentCharacteristics.Quality && relatedCharacteristics.Quality)
              && <ul>Quality</ul> }
            {(currentCharacteristics.Length && relatedCharacteristics.Length) && <ul>Length</ul> }
            {(currentCharacteristics.Fit && relatedCharacteristics.Fit) && <ul>Fit</ul> }
          </aside>
          <aside className="related-products-modal-compared-product-section">
            <div className="related-products-modal-section-title">
              <div className="related-products-modal-section-product-name">{relatedName}</div>
              <div className="related-products-modal-section-product-style">{relatedStyles.results[0].name}</div>
            </div>
            <ul>
              {(currentCharacteristics.Size && relatedCharacteristics.Size)
                && (
                  Math.round(relatedCharacteristics.Size.value * 10) / 10
                )}
            </ul>
            <ul>
              {(currentCharacteristics.Width && relatedCharacteristics.Width)
              && (
                Math.round(relatedCharacteristics.Width.value * 10) / 10
              )}
            </ul>
            <ul>
              {(currentCharacteristics.Comfort && relatedCharacteristics.Comfort)
              && (
                Math.round(relatedCharacteristics.Comfort.value * 10) / 10
              )}
            </ul>
            <ul>
              {(currentCharacteristics.Quality && relatedCharacteristics.Quality)
              && (
                Math.round(relatedCharacteristics.Quality.value * 10) / 10
              )}
            </ul>
            <ul>
              {(currentCharacteristics.Length && relatedCharacteristics.Length)
              && (
                Math.round(relatedCharacteristics.Length.value * 10) / 10
              )}
            </ul>
            <ul>
              {(currentCharacteristics.Fit && relatedCharacteristics.Fit)
              && (
                Math.round(relatedCharacteristics.Fit.value * 10) / 10
              )}
            </ul>
          </aside>
        </div>
        <div className="related-products-modal-footer">
          <button className="modal-close-button" onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </div>
    </div>
  );
}

RelatedProductsModal.propTypes = {
  productName: propTypes.string.isRequired,
  styles: propTypes.shape().isRequired,
  setIsOpen: propTypes.func.isRequired,
  currentCharacteristics: propTypes.shape().isRequired,
  relatedName: propTypes.string.isRequired,
  relatedCharacteristics: propTypes.shape().isRequired,
  relatedStyles: propTypes.shape().isRequired,
};

export default RelatedProductsModal;
