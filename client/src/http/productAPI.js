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
    const { data } = await $host.post('api/product/remove', id)
    return data
}


export const createProduct = async (product) => {
    const { data } = await $authHost.post('api/product', product)
    return data
}

export const updateProduct = async (id) => {
    const { data } = await $host.post('api/product/update', id)
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

export const fetchOneProduct = async (id) => {
    const { data } = await $host.get('api/product/' + id)
    return data
}