import propTypes from 'prop-types';
import React from 'react';
import Card from './Card';
// takes an array of cards
function CardList({ cards }) {
  // incoming data
  return (
    <section className="row">
      <div className="grid">
        <section>
          <div className="card-title">
            Temp title of list here
          </div>
          { cards.map((someCardId) => <Card relatedCardId={someCardId} />) }
        </section>
      </div>
    </section>
  );
}

CardList.propTypes = {
  cards: propTypes.arrayOf(propTypes.number).isRequired,
};

export default CardList;
