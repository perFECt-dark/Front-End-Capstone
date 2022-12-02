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
  for (var i = 1; i < 16; i++) {
    quantity.push({ value: `${i}`, label: `${i}` });
  }
  console.log(quantity);
  const [size, setSize] = React.useState(sizes[0]);
  const [amount, setAmount] = React.useState(quantity[0]);
  return (
    <div id="cart-box" className="right-col">
      <Select
        defaultValue={size}
        onChange={setSize}
        options={sizes}
      />
      <Select
        defaultValue={amount}
        onChange={setAmount}
        options={amount}
      />
    </div>
  );
};

export default AddToCart;
