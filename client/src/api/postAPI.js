import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode";

export const removePost = async (id) => {
    try {
        const { data } = await $host.post('api/post/remove', id)
        return true
    }
    catch (e) {
        return e.message
    }
}


export const createPost = async (post) => {
    try {
        const { data } = await $authHost.post('api/post', post)
        return true
    }
    catch (e) {
        return e.message
    }
}

export const updatePost = async (post) => {
    try {
        const { data } = await $host.post('api/post/update', post)
        return true
    }
    catch (e) {
        return e.message
    }
}

export const fetchPosts = async (page, limit = 5) => {
    try {
        const { data } = await $host.get('api/post', {
            params: {
                page, limit
            }
        })
        return data
    }
    catch (e) {
        return e.message
    }
}

export const fetchOnePost = async (id) => {
    try {
        const { data } = await $host.get(`api/post/${id}`)
        return data
    }
    catch (e) {
        return e.message
    }
}