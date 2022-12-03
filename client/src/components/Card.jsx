// import propTypes from 'prop-types';
import React from 'react';

function Card({ product }) {
  return (
    <div className="card">
      <div className="image-card">
        <img className="image-object" alt={`for ${product.results.name}`} src={product.results.photos[0].url} />
      </div>
      <div className="card-title">
        {product.results.name}
        <br />
        Orignial price:
        {product.results.original_price}
        <br />
        Sale price:
        {product.results.sale_price}
      </div>
    </div>
    //<div>When this stupid propType works, put card here</div>
  );
}

//trying to use prop type breaks everything, even though its a dependency and after npm install, so I commented everything in card and just return a div
// Card.propTypes = {
//   product: propTypes.objectOf(propTypes.object()).isRequired,
// };

export default Card;
