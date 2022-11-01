import { $authHost, $host } from "./index";

export const create = async (body) => {
    try {
        const { data } = await $authHost.post('api/tickets/add-new', body)
        return data
    } catch (e) {
        return e.message
    }
}

export const userFetchTickets = async (userId) => {
    try {
        const { data } = await $authHost.get(`api/tickets/user/${userId}`);
        return data
    } catch (e) {
        return e.message;
    }
}

export const fetchTickets = async () => {
    try {
        const { data } = await $authHost.get('api/tickets');
        return data
    } catch (e) {
        return e.message;
    }
}

export const updateTicket = async (body) => {
    try {
        const { data } = await $authHost.post('api/tickets/update', body);
        return data;
    } catch (e) {
        return e.message;
    }
}

export const getTicket = async (id) => {
    try {
        const { data } = await $authHost.get(`api/tickets/${id}`);
        return data;
    } catch (e) {
        return e.message;
    }
}