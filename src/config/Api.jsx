import axios from "axios"

export const API_BASE_URL = 'http://localhost:8000/api'
const jwt = localStorage.getItem("jwt")
export const api = axios.create({
    baseURL: API_BASE_URL,
    headers:{
        "Content-Type": "application/json",

    }
})

export const apiJWT = axios.create({
    baseURL: API_BASE_URL,
    headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`
    }
}) 