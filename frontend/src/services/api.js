import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getClientes = () => axios.get(`${API_URL}/clientes/`);
export const getGestores = () => axios.get(`${API_URL}/gestores/`);
export const getPagos = () => axios.get(`${API_URL}/pagos/`);