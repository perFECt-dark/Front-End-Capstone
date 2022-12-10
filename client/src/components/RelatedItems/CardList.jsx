import propTypes from 'prop-types';
import React from 'react';
import Card from './Card';
// takes an array of cards
function CardList({ cards, listTitle }) {
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
              relatedCardId={someCardId}
              // actionButtonEvent={handleCardActionButton}
            />
          ))}
        </section>
      </div>
    </section>
  );
}

CardList.propTypes = {
  cards: propTypes.arrayOf(propTypes.number).isRequired,
  listTitle: propTypes.string.isRequired,
  // handleCardActionButton: propTypes.func.isRequired,
};

export default CardList;
