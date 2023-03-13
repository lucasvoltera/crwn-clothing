export const addItemToCart = (cartItems, cartItemToAdd) => {
    // checks if the new item already exists in the cart
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );

    // if the item already exists, returns add +1 to the quantity
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }

     // if the item doesnt exist, create add the new item to the end of the array
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };