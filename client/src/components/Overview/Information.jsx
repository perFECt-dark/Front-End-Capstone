/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';

const Information = ({
  info, current, reviews, meta, StarDisplay,
}) => {
  let price = (
    <h5>
      $
      {current.original_price}
    </h5>
  );
  // temporary star review indicator
  let rating = 0;
  rating += (Number(meta.ratings['1']) + (Number(meta.ratings['2']) * 2) + (Number(meta.ratings['3']) * 3) + (Number(meta.ratings['4']) * 4) + (Number(meta.ratings['5']) * 5));
  rating /= (Number(meta.ratings['1']) + Number(meta.ratings['2']) + Number(meta.ratings['3']) + Number(meta.ratings['4']) + Number(meta.ratings['5']));
  const showStar = <StarDisplay size={20} val={rating} />;
  // temporary star review indicator
  if (current.sale_price !== null) {
    price = (
      <div>
        <h5 className="sale-price">
          $
          {current.sale_price}
        </h5>
        <h5 className="discounted">
          $
          {current.original_price}
        </h5>
      </div>
    );
  }
  let reviewCount;
  if (reviews.count === 1) {
    reviewCount = (
      <p>
        {showStar}
        Read [
        {reviews.count}
        ] review!
      </p>
    );
  } else if (reviews.count > 1) {
    reviewCount = (
      <p>
        {showStar}
        Read all [
        {reviews.count}
        ] reviews!
      </p>
    );
  }
  return (
    <div>
      {reviewCount}
      <h5>
        {info.category}
      </h5>
      <h1>
        {info.name}
      </h1>
      {price}
    </div>
  );
};
Information.propTypes = {
  info: PropTypes.shape().isRequired,
  reviews: PropTypes.shape().isRequired,
  current: PropTypes.shape().isRequired,
  meta: PropTypes.shape().isRequired,
};
export default Information;
