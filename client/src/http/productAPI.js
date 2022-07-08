import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const createCategory = async (category) => {
    const { data } = await $host.post('api/category', category)
    return data
}

export const fetchCategories = async () => {
    const { data } = await $host.get('api/category')
    return data
}


export const createProduct = async (product) => {
    const { data } = await $authHost.post('api/product', product)
    return data
}

export const fetchProducts = async (categoryId, page, limit = 5) => {
    const { data } = await $host.get('api/product', {
        params: {
            categoryId, page, limit
        }
    })
    return data
}

export const fetchOneDevice = async (id) => {
    const { data } = await $host.get('api/product/' + id)
    return data
}