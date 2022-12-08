/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';

const Information = ({ info, current, reviews }) => {
  let price = (
    <h5>
      $
      {current.original_price}
    </h5>
  );
  // temporary star review indicator
  let rating = 0;
  reviews.results.forEach((rev) => {
    rating += rev.rating;
  });
  rating /= reviews.results.length;
  let showStar = '☆☆☆☆☆';
  if (rating >= 5) {
    showStar = '⭐⭐⭐⭐⭐ ';
  } else if (rating >= 4) {
    showStar = '⭐⭐⭐⭐☆ ';
  } else if (rating >= 3) {
    showStar = '⭐⭐⭐☆☆ ';
  } else if (rating >= 2) {
    showStar = '⭐⭐☆☆☆ ';
  } else if (rating >= 1) {
    showStar = '⭐☆☆☆☆ ';
  }
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
};
export default Information;
