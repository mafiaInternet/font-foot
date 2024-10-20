import axios from "axios"
import { API_BASE_URL, apiJWT } from "../../config/Api"
import { DELETE_ITEM_FROM_CART_FAILURE, DELETE_ITEM_FROM_CART_REQUEST, DELETE_ITEM_FROM_CART_SUCCESS, GET_CART_BY_USER_FAILURE, GET_CART_BY_USER_REQUEST, GET_CART_BY_USER_SUCCESS, POST_ITEM_TO_CART_FAILURE, POST_ITEM_TO_CART_REQUEST, POST_ITEM_TO_CART_SUCCESS, PUT_ITEM_OF_CART_FAILURE, PUT_ITEM_OF_CART_REQUEST, PUT_ITEM_OF_CART_SUCCESS } from "./ActionType"


export const getCart = () => async (dispatch) => {
    dispatch({type: GET_CART_BY_USER_REQUEST})

    try {
        const {data} = await apiJWT.get('cart')
        localStorage.setItem("cart", JSON.stringify(data.cartItems))
        console.log(data)
        dispatch({type: GET_CART_BY_USER_SUCCESS, payload: data.cartItems})
    } catch (error) {
        dispatch({type: GET_CART_BY_USER_FAILURE, payload: error.message})
    }
}

export const deleteItemToCart = (id) => async (dispatch) => {
    dispatch({type: DELETE_ITEM_FROM_CART_REQUEST})
    try {
        const {data} = apiJWT.delete(`cart/item/${id}/delete`)
        dispatch({type: DELETE_ITEM_FROM_CART_SUCCESS, payload: id})
    } catch (error) {
        dispatch({type:DELETE_ITEM_FROM_CART_FAILURE, payload: error.message})
    }
}

export const putItemOfCart = (req) => async (dispatch) => {
    dispatch({type: PUT_ITEM_OF_CART_REQUEST})
    try {
        const {data} = await apiJWT.put(`cart/item/${req.id}/update`, {quantity: req.quantity, status: req.status})
        dispatch({type: PUT_ITEM_OF_CART_SUCCESS, payload: req})
    } catch (error) {
        dispatch({type: PUT_ITEM_OF_CART_FAILURE, payload: error.message})
    }
}

export const postItemToCart = (req) => async (dispatch) => {
    dispatch({type: POST_ITEM_TO_CART_REQUEST})
    try {
        const {data} = await apiJWT.post('cart', req)
        dispatch({type: POST_ITEM_TO_CART_SUCCESS, payload: data.cartItem})
    } catch (error) {
        dispatch({type: POST_ITEM_TO_CART_FAILURE, payload: error.message})
    }
}