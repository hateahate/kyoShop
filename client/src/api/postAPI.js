import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode";

export const removePost = async (id) => {
    const { data } = await $host.post('api/post/remove', id)
    return data
}


export const createPost = async (post) => {
    const { data } = await $authHost.post('api/post', post)
    return data
}

export const updatePost = async (product) => {
    const { data } = await $host.post('api/post/update', post)
    return data
}

export const fetchPosts = async (page, limit = 5) => {
    const { data } = await $host.get('api/post', {
        params: {
            page, limit
        }
    })
    return data
}

export const fetchOnePost = async (id) => {
    const { data } = await $host.get(`api/post/${id}`)
    return data
}