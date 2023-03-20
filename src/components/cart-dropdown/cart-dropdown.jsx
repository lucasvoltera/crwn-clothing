import React from "react";
// import './cart-dropdown.scss'
// import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

import {CartDropdownContainer, CartDropdownButton, EmptyMessageContainer, CartItemsContainer } from './cart-dropdown-styles';
  
  const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
      <CartItemsContainer>
        {
            cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            )
        }
      </CartItemsContainer>
      <CartDropdownButton
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
  
  const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
  });
  
  export default withRouter(connect(mapStateToProps)(CartDropdown));