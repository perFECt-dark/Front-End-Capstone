import propTypes from 'prop-types';
import React from 'react';
import CardList from './CardList';

function RelatedProductsList({ cards }) {
  function handleRelatedProductsActionButton() {

  }
  return (
    <CardList cards={cards} listTitle="Related Products" />
  );
}

RelatedProductsList.propTypes = {
  cards: propTypes.arrayOf(propTypes.number).isRequired,
};

export default RelatedProductsList;
