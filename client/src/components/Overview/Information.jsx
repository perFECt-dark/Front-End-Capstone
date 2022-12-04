/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';

const Information = ({ info, reviews }) => {
  return (
    <div id="info-box">
      <p>
        ⭐⭐⭐⭐⭐ Read all [
        {reviews.count}
        ] Reviews
      </p>
      <h5>
        {info.category}
      </h5>
      <h1>
        {info.name}
      </h1>
      <h5>
        $
        {info.default_price}
      </h5>
    </div>
  );
};
Information.propTypes = {
  info: PropTypes.shape().isRequired,
  reviews: PropTypes.shape().isRequired,
};
export default Information;
