import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { useDispatch } from 'react-redux';
import cartReducer from '../../redux/cart/cartReducer';
import { toggleCartHidden } from '../../redux/cart/cartActions';

const CartIcon = () => {
  const dispatch = useDispatch(cartReducer);

  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;
