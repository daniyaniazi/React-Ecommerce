import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from 'react-redux';


import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapSateToProp = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapSateToProp)(CartDropdown);