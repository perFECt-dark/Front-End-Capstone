import propTypes from 'prop-types';
import React, { useState } from 'react';
import Card from './Card';
import RelatedProductsModal from './RelatedProductsModal';
// takes an array of cards
function CardList({
  productName, styles, cards, listTitle, characteristics, grabInfo,
}) {
  const [index, setIndex] = useState(0);
  const [modalData, setModalData] = useState({});

  function updateIndex(newIndex, goingRight) {
    console.log('Right button called', index);
    if (goingRight) {
      setIndex((index + 0.25));
    } else {
      setIndex((index - 0.25));
    }
  }

  function displayModal(productName, styles, setIsOpen, currentCharacteristics, relatedName, metaCharacteristics, relatedStyles) {
    console.log('These are the characteristics from displayModal', currentCharacteristics);
    console.log('This is setIsOpen in displayModal', setIsOpen);
    setModalData({
      productName: productName,
      styles: styles,
      setIsOpen: setIsOpen,
      currentCharacteristics: currentCharacteristics,
      relatedName: relatedName,
      metaCharacteristics: metaCharacteristics,
      relatedStyles: relatedStyles,
    });
  }
  return (
    <section className="row">
      <div className="grid">
        <div className="card-title">
          {listTitle}
        </div>
        <div className="col-5">
          {index !== 0
            && <button className="carousel-buttons" onClick={() => {updateIndex(index, false)}}>←</button> }
        </div><aside className='col-90'>
        <div className="related-products-carousel">
          <div className="inner" style={{ transform: `translateX(-${index * 100}%)` }}>
            { cards.map((someCardId) => (
              <Card
                productName={productName}
                styles={styles}
                relatedCardId={someCardId}
                characteristics={characteristics}
                grabInfo={grabInfo}
                setIndex={setIndex}
                displayModal={displayModal}
              />
            ))}
          </div>
        </div>
        </aside><aside className='col-5'>{index < ((cards.length * 0.25) - 1)
            && <button className="carousel-buttons" onClick={() => {updateIndex(index, true)}}>→</button> }</aside>
      </div>
      {(modalData.setIsOpen && modalData.characteristics !== null)
            && (
              <RelatedProductsModal
                productName={productName}
                styles={styles}
                setIsOpen={setModalData}
                currentCharacteristics={characteristics}
                relatedName={modalData.relatedName}
                relatedCharacteristics={modalData.currentCharacteristics}
                relatedStyles={modalData.relatedStyles}
                displayModal={displayModal}
              />
            )}
            {/* {(modalData.setIsOpen && modalData.characteristics) */}

    </section>
  );
}

CardList.propTypes = {
  productName: propTypes.string.isRequired,
  styles: propTypes.shape().isRequired,
  cards: propTypes.arrayOf(propTypes.number).isRequired,
  listTitle: propTypes.string.isRequired,
  characteristics: propTypes.shape(),
  grabInfo: propTypes.func.isRequired,
};
CardList.defaultProps = {
  characteristics: null,
};

export default CardList;
