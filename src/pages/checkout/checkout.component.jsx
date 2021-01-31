import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import './checkout.styles.scss';
import { selectCartTotal, selelctCartItems } from "../../redux/cart/cart.selectors";
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripCheckoutButton from '../../components/strip-button/strip-button.component'

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>

            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>

        </div>
        {
            cartItems.map((cartItem) =>
            (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
            )
        }
        <div className="total">

            <span>TOTAL : ${total}</span>
        </div>
        <div className='test-warning'>
            *PLEASE USE THE FOLLOWING TEST CREDIT CARD FOR PAYMENT*
<br />
4242 4242 4242 4242 - Exp : 02/21 - CVV: 123
        </div>
        <StripCheckoutButton price={total} />
    </div>

)



const mapStateToProps = (state) => ({
    cartItems: selelctCartItems(state),
    total: selectCartTotal(state)
})
export default connect(mapStateToProps)(CheckoutPage);