import axios from "axios";

const API_URL = 'https://jairo-aulas-sds2.herokuapp.com';

export function fetchOrdes() {
    return axios(`${API_URL}/orders`)
}

export function confirmDelivery(orderId: number) {
    return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}