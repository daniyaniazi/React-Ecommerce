export const addItemToCart = (cartItems, cartItemsToAdd) => {
    const existngCartItem = cartItems.find(cartItem => cartItem.id === cartItemsToAdd.id)

    if (existngCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemsToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }
    return [...cartItems, { ...cartItemsToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existngCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if (existngCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}