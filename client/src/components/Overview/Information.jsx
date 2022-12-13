/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
  // star review indicator
  let rating = 0;
  rating += (Number(meta.ratings['1']) + (Number(meta.ratings['2']) * 2) + (Number(meta.ratings['3']) * 3) + (Number(meta.ratings['4']) * 4) + (Number(meta.ratings['5']) * 5));
  const totalReview = (Number(meta.ratings['1']) + Number(meta.ratings['2']) + Number(meta.ratings['3']) + Number(meta.ratings['4']) + Number(meta.ratings['5']));
  rating /= totalReview;
  const showStar = <StarDisplay size={20} val={rating} />;
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
  const scrollHandler = () => reference[0].scrollIntoView();
  let reviewCount;
  if (totalReview === 1) {
    reviewCount = (
      <p id="read-all-reviews" onClick={(e) => scrollHandler(e)}>
        Read [
        {totalReview}
        ] review!
      </p>
    );
  } else if (totalReview > 1) {
    reviewCount = (
      <p id="read-all-reviews" onClick={(e) => scrollHandler(e)}>
        Read all [
        {totalReview}
        ] reviews!
      </p>
    );
  }
  return (
    <div>
      <div style={{ float: 'left' }}>{showStar}</div>
      {reviewCount}
      <br />
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
  StarDisplay: PropTypes.func.isRequired,
};
export default Information;
