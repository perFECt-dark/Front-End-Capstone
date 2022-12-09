import propTypes from 'prop-types';
import React from 'react';
import Card from './Card';
// takes an array of cards
function CardList({
  productName, styles, cards, listTitle, characteristics,
}) {
  // incoming data
  return (
    <section className="card-row">
      <div className="card-grid">
        <section>
          <div className="card-title">
            {listTitle}
          </div>
          { cards.map((someCardId) => (
            <Card
              productName={productName}
              styles={styles}
              relatedCardId={someCardId}
              characteristics={characteristics}
            />
          ))}
        </section>
      </div>
    </section>
  );
}

CardList.propTypes = {
  productName: propTypes.string.isRequired,
  styles: propTypes.shape().isRequired,
  cards: propTypes.arrayOf(propTypes.number).isRequired,
  listTitle: propTypes.string.isRequired,
  characteristics: propTypes.shape(),
};
CardList.defaultProps = {
  characteristics: null,
};

export default CardList;