import { applyMiddleware, combineReducers, legacy_createStore } from "redux"

import { productReducer } from "./Product/Reducer";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { addressReducer } from "./Address/Reducer";

const rootReducers = combineReducers({
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    address: addressReducer
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));