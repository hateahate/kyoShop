import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (user) => {
    try {
        const { data } = await $host.post('api/user/registration', user)
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)
    }
    catch (e) {
        return e.message
    }
}

export const login = async (email, password) => {
    const { data } = await $host.post('api/user/login', { email, password })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const { data } = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const getUserById = async (id) => {
    try {
        const { data } = await $authHost.get(`/api/user/${id}`)
        return data
    }
    catch (e) {
        return e.message
    }
}

export const getAllUsersByAdmin = async () => {
    try {
        const { data } = await $authHost.get('/api/user/');
        return data
    }
    catch (e) {
        return e.message
    }
}