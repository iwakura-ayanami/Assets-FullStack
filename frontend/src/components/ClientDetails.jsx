import { useState, useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { getGestores, getPagos } from '../services/api';

const ClientDetails = ({ clientId }) => {
  const [gestores, setGestores] = useState([]);
  const [pagos, setPagos] = useState([]);

  useEffect(() => {
    getGestores().then(response => setGestores(response.data));
    getPagos().then(response => setPagos(response.data));
  }, [clientId]);

  const gestoresPorCliente = gestores.filter(gestor => 
    pagos.some(pago => pago.cliente === clientId && pago.gestor === gestor.id)
  );

  const montoPorGestor = gestoresPorCliente.map(gestor => ({
    ...gestor,
    montoTotal: pagos
      .filter(pago => pago.cliente === clientId && pago.gestor === gestor.id)
      .reduce((sum, pago) => sum + pago.abonos, 0)
  }));

  const abonoTotal = pagos
    .filter(pago => pago.cliente === clientId)
    .reduce((sum, pago) => sum + pago.abonos, 0);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Detalles del Cliente</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Gestores y Montos:</Card.Subtitle>
        <ListGroup variant="flush">
          {montoPorGestor.map(gestor => (
            <ListGroup.Item key={gestor.id}>
              {gestor.nombre}: ${gestor.montoTotal}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Text className="mt-3">
          <strong>Abono Total:</strong> ${abonoTotal}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ClientDetails;