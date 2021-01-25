import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from 'react-redux';
import { selelctCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { withRouter } from "react-router-dom";


import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className="cart-items">
            {
                cartItems.length ?
                    cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                    :
                    <span className="empty-msg">YOUR CART IS EMPTY</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapSateToProp = (state) => ({
    cartItems: selelctCartItems(state)
})

export default withRouter(connect(mapSateToProp)(CartDropdown));