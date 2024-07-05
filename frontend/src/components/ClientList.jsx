import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { getClientes } from '../services/api';

const ClientList = ({ onSelectClient }) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClientes().then(response => setClients(response.data));
  }, []);

  return (
    <div>
      <h2 className="mb-3">Clientes</h2>
      <ListGroup>
        {clients.map(client => (
          <ListGroup.Item 
            key={client.id} 
            action 
            onClick={() => onSelectClient(client.id)}
          >
            {client.nombre}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ClientList;