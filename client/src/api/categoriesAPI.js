import { $authHost, $host } from ".";

// Product categories
export const fetchCategories = async () => {
    try {
        const { data } = await $authHost.get('api/category')
        return data
    }
    catch (e) {
        return e.message
    }
}

export const createCategory = async (body) => {
    try {
        const { data } = await $authHost.post('api/category', body)
        return data
    }
    catch (e) {
        return e.message
    }
}

export const removeCategory = async (id) => {
    try {
        const { data } = await $authHost.post('api/category/remove', id)
        return data
    }
    catch (e) {
        return e.message
    }
}

export const updateCategory = async (body) => {
    try {
        const { data } = await $authHost.post('api/category/update', body)
        return data
    } catch (e) {
        return e.message
    }
}

// Post categories
export const fetchPostCategories = async () => {
    try {
        const { data } = await $authHost.get('api/postcat')
        return data
    }
    catch (e) {
        return e.message
    }
}

export const createPostCategory = async (body) => {
    try {
        const { data } = await $authHost.post('api/postcat/', body)
        return data
    } catch (e) {
        return e.message
    }
}

export const removePostCategory = async (id) => {
    try {
        const { data } = await $authHost.post('api/postcat/remove', id)
        return data
    }
    catch (e) {
        return e.message
    }
}

export const updatePostCategory = async (body) => {
    try {
        const { data } = await $authHost.post('api/postcat/update', body)
        return data
    } catch (e) {
        return e.message
    }
}

export const fetchAttributes = async () => {
    try {
        const { data } = await $authHost.get('api/attribute')
        return data
    } catch (e) {
        return e.message
    }
}

export const removeAttribute = async (id) => {
    try {
        const { data } = await $authHost.post(`api/attribute/remove/${id}`)
        return data
    } catch (e) {
        return e.message
    }
}