/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';

const Information = ({
  info, current, meta, StarDisplay,
}) => {
  let price = (
    <h5>
      $
      {current.original_price}
    </h5>
  );
  // star review indicator
  let rating = 0;
  let total = 0;
  // updated in the case that some ratings don't exist
  Object.entries(meta.ratings).forEach((rate) => {
    rating += Number(rate[0]) * Number(rate[1]); total += Number(rate[1]);
  });
  rating /= total;
  const showStar = <StarDisplay size={20} val={rating} style={{ maxWidth: '105px' }} />;
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
  // scroll to reviews
  const reference = document.getElementsByClassName('ratingBox');
  const scrollHandler = () => reference[0].scrollIntoView({ behavior: 'smooth' });
  let reviewCount;
  if (total === 1) {
    reviewCount = (
      <p id="read-all-reviews" onClick={(e) => scrollHandler(e)}>
        Read [
        {total}
        ] review!
      </p>
    );
  } else if (total > 1) {
    reviewCount = (
      <p id="read-all-reviews" onClick={(e) => scrollHandler(e)}>
        Read all [
        {total}
        ] reviews!
      </p>
    );
  }
  return (
    <div style={{ marginTop: '10px' }}>
      <div style={{ position: 'absolute', maxWidth: '105px' }}>{showStar}</div>
      <aside style={{ marginLeft: '90px', maxWidth: 'fit-content' }}>{reviewCount}</aside>
      <h5 style={{ marginTop: '20px' }}>{info.category}</h5>
      <h1>
        {info.name}
      </h1>
      {price}
    </div>
  );
};
Information.propTypes = {
  info: PropTypes.shape().isRequired,
  current: PropTypes.shape().isRequired,
  meta: PropTypes.shape().isRequired,
  StarDisplay: PropTypes.func.isRequired,
};
export default Information;
