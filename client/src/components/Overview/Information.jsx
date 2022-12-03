/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';

const Information = ({ info }) => {
  console.log('all the information: ', info);

  return (
    <div id="info-box">
      <p> ⭐⭐⭐⭐⭐ Read all (#) Reviews </p>
      <h5> {info.category} </h5>
      <h1> {info.name} </h1>
      <h5>{info.default_price} </h5>
    </div>
  );
};

export default Information;
