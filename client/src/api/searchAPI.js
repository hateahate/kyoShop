import { $host } from "."

export const liveSearch = async (title) => {
    try {
        const { data } = await $host.get(`api/search/?title=${title}`)
        return data
    } catch (e) {
        return e.message
    }
}