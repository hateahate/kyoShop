import { $authHost, $host } from ".";

export const fetchCategories = async () => {
    try {
        const { data } = await $host.get('/api/category')
        return data
    }
    catch (e) {
        e.message
    }
}