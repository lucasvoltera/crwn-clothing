// root reducer is the combination of all the states in our application
import { combineReducers } from "redux";

import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";

// the root reducer is just one big object combined with every other small reducers.
export default combineReducers({
    user: userReducer,
    cart: cartReducer
})