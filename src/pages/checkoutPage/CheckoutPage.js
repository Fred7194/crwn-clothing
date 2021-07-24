import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

import './checkout.styles.scss';

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <span className='header-block'>Product</span>
        <span className='header-block'>Description</span>
        <span className='header-block'>Quantity</span>
        <span className='header-block'>Price</span>
        <span className='header-block'>Remove</span>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${totalPrice}</div>
    </div>
  );
};

export default CheckoutPage;
