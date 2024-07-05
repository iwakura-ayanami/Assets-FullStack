import { useState, useEffect } from 'react';
import api from '../services/api';

const useApi = () => {
  const [clientes, setClientes] = useState([]);
  const [gestores, setGestores] = useState([]);
  const [pagos, setPagos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [clientesRes, gestoresRes, pagosRes] = await Promise.all([
          api.fetchClientes(),
          api.fetchGestores(),
          api.fetchPagos()
        ]);
        setClientes(clientesRes.data);
        setGestores(gestoresRes.data);
        setPagos(pagosRes.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { clientes, gestores, pagos, loading, error };
};

export default useApi;