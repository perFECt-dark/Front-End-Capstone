import propTypes from 'prop-types';
import React from 'react';

function Card({ info }) {
  return (
    <aside className="card">
      <div className="image-card">
        <img
          className="image-object"
          alt={`for ${info.name}`}
          src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        />
      </div>
      <div className="card-info">
        Category:
        {info.category}
        <br />
        Name:
        {info.name}
        <br />
        Price: $
        {info.default_price}
        <br />
        Rating: ⭐⭐⭐⭐ (Just for show)

      </div>
    </aside>
  );
}

Card.propTypes = {
  info: propTypes.shape().isRequired,
};

export default Card;
