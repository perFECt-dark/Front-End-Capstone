/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';

const Information = ({ info, current, reviews }) => {
  let price = (
    <h5>
      $
      {info.default_price}
    </h5>
  );
  if (current.sale_price) {
    price = (
      <div>
        <h5 style={{ float: 'left', paddingRight: '10px' }}>
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
        ⭐⭐⭐⭐⭐ Read [
        {reviews.count}
        ] review!
      </p>
    );
  } else if (reviews.count > 1) {
    reviewCount = (
      <p>
        ⭐⭐⭐⭐⭐ Read all [
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
