/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';

const Information = () => {
  const placeholder = {
    float: 'left',
    width: '30%',
    padding: '15px',
    border: '10px solid red',
    margin: '10px 10px 0px 10px',
  };
  return (
    <div style={placeholder} id="all-product-info">
      <div id="right-info-box" className="right-col">
        <h3> ⭐⭐⭐⭐⭐ Read all (#) Reviews </h3>
        <h4> Category </h4>
        <h3> Product Name </h3>
        Price
      </div>
    </div>
  );
};

export default Information;
