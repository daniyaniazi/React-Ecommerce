import { createSelector } from 'reselect'
//input selector
const selectCart = state => state.cart;


export const selelctCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selelctCartItems],
    cartItems => cartItems.reduce((acumulatedQuantity, cartItem) => acumulatedQuantity + cartItem.quantity, 0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);
