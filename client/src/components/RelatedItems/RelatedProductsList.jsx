import propTypes from 'prop-types';
import React from 'react';
import CardList from './CardList';

function RelatedProductsList({
  productName, styles, cards, characteristics,
}) {
  return (
    <CardList productName={productName} styles={styles} cards={cards} listTitle="Related Products" characteristics={characteristics} />
  );
}

RelatedProductsList.propTypes = {
  productName: propTypes.string.isRequired,
  styles: propTypes.shape().isRequired,
  cards: propTypes.arrayOf(propTypes.number).isRequired,
  characteristics: propTypes.shape().isRequired,
};

export default RelatedProductsList;
