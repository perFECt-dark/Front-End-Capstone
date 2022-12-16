/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';

const AddToCart = ({ current, info }) => {
  const sizes = [{ key: 'select', size: 'Select Size...', amount: 'null' }];
  const quantity = [];
  let currentQuantity = 0;
  Object.entries(current.skus).map((unit) => {
    sizes.push({ key: unit[0], size: `${unit[1].size}`, amount: `${unit[1].quantity}` });
  });
  // these update based on selected
  const [size, setSize] = React.useState(sizes[0]);
  const [amount, setAmount] = React.useState(0);
  const [cart, setCart] = React.useState([]); // temporary cart
  sizes.forEach((item) => {
    if (item.size === (size)) {
      currentQuantity = Number(item.amount);
    }
  });
  for (let i = 1; i !== null && (i <= currentQuantity && i < 16); i += 1) {
    quantity.push({ key: i, value: i });
  }
  const cartHandler = () => {
    if (size.key === 'select' || amount < 1) {
      document.getElementById('no-size-error').style.visibility = 'visible';
      document.getElementById('item-size').focus();
      // focuses on the select but doesn't open the dropdown
      document.getElementById('item-size').click();
    } else {
      setCart([...cart, {
        itemName: info.name, itemStyle: current.name, itemSize: size, itemAmount: amount,
      }]);
      alert(`${amount} ${info.name} with ${current.name} style of size ${size} added`);
    }
  };
  // console.log(cart); if I want to see what is inside the cart
  let cartButton;
  if (sizes.every((item) => item.amount === 'null')) {
    cartButton = <h3 style={{ float: 'left' }}>Out of Stock</h3>;
  } else {
    cartButton = <button className="cart" onClick={(e) => cartHandler(e)}>Add to Cart</button>;
  }
  return (
    <div id="cart-box" style={{ verticalAlign: 'bottom' }}>
      <form>
        <label htmlFor="item-size">
          <h4 id="no-size-error">Please select size</h4>
          <select
            id="item-size"
            value={size || 'OUT OF STOCK'}
            onChange={(e) => {
              setSize(e.target.value);
              if (e.target.value === 'Select Size...') {
                setAmount(0);
                return;
              }
              setAmount(1);
            }}
          >
            {sizes.some((item) => item.amount > 0) ? sizes.map((item) => {
              if (item.amount < 1) { return; }
              return (
                <option key={item.key}>{item.size}</option>
              );
            }) : (<option value="disable" key="disabled" disabled>OUT OF STOCK</option>)}
          </select>
        </label>
      </form>
      <form>
        <label htmlFor="item-quant">
          <select
            id="item-quant"
            value={amount}
            onChange={(e) => { setAmount(Number(e.target.value)); }}
          >
            <option disabled>-</option>
            {quantity.map((currAmount) => {
              return (<option key={currAmount.key}>{currAmount.value}</option>);
            })}
          </select>
        </label>
      </form>
      {cartButton}
    </div>
  );
};
AddToCart.propTypes = {
  current: PropTypes.shape().isRequired,
  info: PropTypes.shape().isRequired,
};
export default AddToCart;
