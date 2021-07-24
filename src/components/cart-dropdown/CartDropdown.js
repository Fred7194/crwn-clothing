import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './cart-dropdown.styles.scss';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';

const CartDropdown = ({ history }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
        inverted
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
