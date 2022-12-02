/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';

const Information = () => {
  const placeholder = {
    position: 'relative',
    float: 'left',
    width: '30%',
    padding: '15px',
    border: '10px solid red',
    margin: '10px 10px 0px 10px',
  };
  return (
    <div style={placeholder} id="all-product-info">
      <div id="right-info-box" className="right-col">
        <h6> ⭐⭐⭐⭐⭐ Read all (#) Reviews </h6>
        <h5> Category </h5>
        <h3> Product Name </h3>
        Price
      </div>
    </div>
  );
};

export default Information;
