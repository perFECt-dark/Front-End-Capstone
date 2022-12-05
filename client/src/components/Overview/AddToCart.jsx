/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import Select from 'react-select';

const AddToCart = () => {
  const sizes = [
    { value: 'select', label: 'Select Size' },
    { value: 'xs', label: 'XS' },
    { value: 's', label: 'S' },
    { value: 'm', label: 'M' },
    { value: 'l', label: 'L' },
    { value: 'xl', label: 'XL' },
    { value: 'xxl', label: 'XXL' },
    { value: 'xxxl', label: 'XXXL' },
  ];
  const quantity = [];
  // will have to change this depending on product stock
  for (let i = 1; i < 16; i += 1) {
    quantity.push({ value: `${i}`, label: `${i}` });
  }
  const [size, setSize] = React.useState(sizes[0]);
  const [amount, setAmount] = React.useState(quantity[0]);
  // trying to move this box to the bottom of the container
  return (
    <div id="cart-box">
      <Select
        defaultValue={size}
        onChange={setSize}
        options={sizes}
      />
      <Select
        defaultValue={amount}
        onChange={setAmount}
        options={quantity}
      />
      <button className="cart">Add to Cart</button>
    </div>
  );
};

export default AddToCart;
