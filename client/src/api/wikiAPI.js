import { $authHost, $host } from ".";

export const removeWiki = async (id) => {
    try {
        const { data } = await $host.post('api/wiki/remove', id)
        return true
    }
    catch (e) {
        return e.message
    }
}


export const createWiki = async (wiki) => {
    try {
        const { data } = await $authHost.post('api/wiki ', wiki)
        return data
    }
    catch (e) {
        return e.message
    }
}

export const updateWiki = async (wiki) => {
    try {
        const { data } = await $host.post('api/wiki/update', wiki)
        return true
    }
    catch (e) {
        return e.message
    }
}

export const fetchWiki = async (page, limit = 5) => {
    try {
        const { data } = await $host.get('api/wiki', {
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

export const fetchOneWiki = async (id) => {
    try {
        const { data } = await $host.get(`api/wiki/${id}`)
        return data
    }
    catch (e) {
        return e.message
    }
}