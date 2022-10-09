import { $authHost } from ".";

export const fetchBasket = async (id) => {
    try {
        const { data } = await $authHost.get(`api/basket/${id}`);
        return data;
    } catch (e) {
        return e.message;
    }
}

export const updateBasket = async (body) => {
    try {
        const { data } = await $authHost.post('api/basket', body);
        return data;
    } catch (e) {
        return e.message;
    }
}