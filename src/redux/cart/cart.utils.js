export const addItemToCart = (cartItems, cartItemsToAdd) => {
    const existngCartItem = cartItems.find(cartItem => cartItem.id == cartItemsToAdd.id)

    if (existngCartItem) {
        return cartItems.map(cartItem => cartItem.id == cartItemsToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }
    return [...cartItems, { ...cartItemsToAdd, quantity: 1 }]
}