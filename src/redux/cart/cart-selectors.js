import { createSelector } from "reselect";

const selectCart = (state) => {
    return state.cart;
};

// const selectUser = (state) => {
//     return state.user;
// };

// input selector, function to return a value form the selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => {
        return cart.cartItems
    }
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => {
        return cart.hidden;
    }
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => {
        return (
            cartItems.reduce(
                (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
                0
            )
        );
    }
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => {
        return(
            cartItems.reduce(
                (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price,
                0
            )
        )
    }
)