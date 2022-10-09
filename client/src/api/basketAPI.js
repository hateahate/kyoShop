import { $authHost } from ".";

export const fetchBasket = async () => {
    try {
        const { basket } = await $authHost.get('/api/basket');
        return basket;
    } catch (e) {
        return e.message;
    }
}

export const updateBasket = async (body) => {
    try {
        const { basket } = await $authHost.post('/api/basket', body);
        return basket;
    } catch (e) {
        return e.message;
    }
}