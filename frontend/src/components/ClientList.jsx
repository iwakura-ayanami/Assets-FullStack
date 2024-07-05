import React, { useState, useEffect } from 'react';
import { getClientes } from '../services/api';

const ClientList = ({ onSelectClient }) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClientes().then(response => setClients(response.data));
  }, []);

  return (
    <div>
      <h2>Clientes</h2>
      <ul>
        {clients.map(client => (
          <li key={client.id} onClick={() => onSelectClient(client.id)}>
            {client.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;