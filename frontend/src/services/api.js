import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const api = {
  fetchClientes: () => axios.get(`${API_URL}/clientes/`),
  fetchGestores: () => axios.get(`${API_URL}/gestores/`),
  fetchPagos: () => axios.get(`${API_URL}/pagos/`)
};

export default api;