import { toast } from "react-toastify"
import { api, API_BASE_URL } from "../../config/Api"
import { GET_LOGIN_FAILURE, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGOUT } from "./ActionType"
import axios from "axios"


export const login = (req) => async (dispatch) => {
    dispatch({type: GET_LOGIN_REQUEST})
    try {
        const {data} = await api.post("login", req)
         
        if(data.token){
            toast.success("Đăng nhập thành công!!!")
            localStorage.setItem('jwt', data.token)
         
            dispatch({type: GET_LOGIN_SUCCESS, payload: data.token})
        }
    } catch (error) {
        dispatch({type: GET_LOGIN_FAILURE, payload: error.message})
    }
}

export const user = (req) => async (dispatch) => {
    dispatch({type: GET_PROFILE_REQUEST})

    try {
        const {data} = await axios.get(`${API_BASE_URL}/profile`,{
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${req}`
            }
        }) 
        console.log(data)
        dispatch({type: GET_PROFILE_SUCCESS, payload: data.user})
       
    } catch (error) {
        dispatch({type: GET_PROFILE_FAILURE, payload: error.message})
    }
}

export const logout = () => async (dispatch) =>{
    dispatch({type: LOGOUT})
    localStorage.removeItem('jwt')
}