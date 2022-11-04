import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode";

export const createCategory = async (category) => {
    const { data } = await $host.post('api/category', category)
    return data
}

export const fetchCategories = async () => {
    const { data } = await $host.get('api/category')
    return data
}

export const removeProduct = async (id) => {
    try {
        const { data } = await $host.post('api/product/remove', id)
        return true
    }
    catch (e) {
        return e.message
    }
}


export const createProduct = async (product) => {
    try {
        const { data } = await $authHost.post('api/product', product)
        return data
    }
    catch (e) {
        return e.message
    }
}

export const updateProduct = async (product) => {
    try {
        const { data } = await $host.post('api/product/update', product)
        return true
    }
    catch (e) {
        return e.message;
    }
}

export const fetchProducts = async (categoryId, page, limit = 5, isAuth) => {
    try {
        const { data } = await $host.get('api/product', {
            params: {
                categoryId, page, limit, isAuth
            }
        })
        return data
    }
    catch (e) {
        return e.message
    }
}

export const fetchOneProduct = async (id) => {
    try {
        const { data } = await $host.get(`api/product/${id}`)
        return data
    }
    catch (e) {
        return e.message
    }
}

export const getProductImgUrl = (url) => {
    return process.env.REACT_APP_API_URL + `/${url}`;
}