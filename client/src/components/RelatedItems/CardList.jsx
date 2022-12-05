import propTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
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
          { cards.map((currentCard) => <Card info={currentCard} />) }
        </section>
      </div>
    </section>
  );
}

CardList.propTypes = {
  cards: propTypes.arrayOf(propTypes.shape()).isRequired,
};

export default CardList;
