import { api } from "../../config/Api"
import { DELETE_ADDRESS_FAILURE, DELETE_ADDRESS_REQUEST, DELETE_ADDRESS_SUCCESS, FIND_ADDRESS_BY_ID_FAILURE, FIND_ADDRESS_BY_ID_REQUEST, FIND_ADDRESS_BY_ID_SUCCESS, GET_ADDRESS_FAILURE, GET_ADDRESS_REQUEST, GET_ADDRESS_SUCCESS, POST_ADDRESS_FAILURE, POST_ADDRESS_REQUEST, POST_ADDRESS_SUCCESS, PUT_ADDRESS_FAILURE, PUT_ADDRESS_REQUEST, PUT_ADDRESS_SUCCESS } from "./ActionType"

export const getAddress = () => async(dispatch) => {
    dispatch({type: GET_ADDRESS_REQUEST})
    try {
        const {data} = await api.get('address')
        dispatch({type: GET_ADDRESS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: GET_ADDRESS_FAILURE, payload: error.message})
    }
} 

export const deleteAddressById = (id) => async(dispatch) => {
    dispatch({type: DELETE_ADDRESS_REQUEST})
    try {
        const {data} = await api.delete(`address/${id}/delete`)
        dispatch({type: DELETE_ADDRESS_SUCCESS, payload: id})
    } catch (error) {
        dispatch({type: DELETE_ADDRESS_FAILURE, payload: error.message})
    }
}

export const update = (req) => async (dispatch) => {
    dispatch({type: PUT_ADDRESS_REQUEST})
    try {
        const {data} = await api.put(`address/${req.id}/update`, req)
        dispatch({type: PUT_ADDRESS_SUCCESS, payload: req})
    } catch (error) {
        dispatch({type: PUT_ADDRESS_FAILURE, payload: error.message})
    }
}

export const findAddressById = (id) => async(dispatch) => {
    dispatch({type: FIND_ADDRESS_BY_ID_REQUEST})
    try {
        const {data} = await api.get(`address/${id}`)
        dispatch({type: FIND_ADDRESS_BY_ID_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: FIND_ADDRESS_BY_ID_FAILURE, payload: error.message})
    }
}

export const create = (req) => async (dispatch) =>{
    dispatch({type: POST_ADDRESS_REQUEST})
    try {
        const {data} = await api.post('/address', req)
 
        dispatch({type: POST_ADDRESS_SUCCESS, payload: data.address})
    } catch (error) {
        dispatch({type: POST_ADDRESS_FAILURE, payload: error.message})
    }
} 