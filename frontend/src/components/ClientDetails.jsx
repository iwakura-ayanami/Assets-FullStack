import React, { useState, useEffect } from 'react';
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
    <div>
      <h2>Detalles del Cliente</h2>
      <h3>Gestores y Montos:</h3>
      <ul>
        {montoPorGestor.map(gestor => (
          <li key={gestor.id}>
            {gestor.nombre}: ${gestor.montoTotal}
          </li>
        ))}
      </ul>
      <h3>Abono Total: ${abonoTotal}</h3>
    </div>
  );
};

export default ClientDetails;