import { api } from "../../config/Api"
import { GET_PRODUCT_BY_ID_FAILURE, GET_PRODUCT_BY_ID_REQUEST, GET_PRODUCT_BY_ID_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./ActionType"

export const getProducts = () => async (dispatch) => {
    dispatch({type: GET_PRODUCTS_REQUEST})
    try {
        const {data} = await api.get("/products")
        console.log(data)
        dispatch({type: GET_PRODUCTS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: GET_PRODUCTS_FAILURE, payload: error.message})
    }
}

export const getProductById = (id) => async (dispatch) => {
    dispatch({type: GET_PRODUCT_BY_ID_REQUEST})
    try {
        const {data} = await api.get(`/product/${id}`)
        console.log(data)
        dispatch({type: GET_PRODUCT_BY_ID_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: GET_PRODUCT_BY_ID_FAILURE, payload: error.message})
    }
}