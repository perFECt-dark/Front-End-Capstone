/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';

const StyleEntry = ({ item }) => {
  return (
    <img className="style-icons" src={item.photos[0].thumbnail_url} alt="" />
  );
};

export default StyleEntry;
