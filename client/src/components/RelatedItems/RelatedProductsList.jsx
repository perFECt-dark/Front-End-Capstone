import propTypes from 'prop-types';
import React from 'react';
import CardList from './CardList';

function RelatedProductsList({
  productName, styles, cards, characteristics, grabInfo,
}) {
  return (
    <CardList productName={productName} styles={styles} cards={cards} listTitle="Related Products" characteristics={characteristics} grabInfo={grabInfo} />
  );
}

RelatedProductsList.propTypes = {
  productName: propTypes.string.isRequired,
  styles: propTypes.shape().isRequired,
  cards: propTypes.arrayOf(propTypes.number).isRequired,
  characteristics: propTypes.shape().isRequired,
  grabInfo: propTypes.func.isRequired,
};

export default RelatedProductsList;
