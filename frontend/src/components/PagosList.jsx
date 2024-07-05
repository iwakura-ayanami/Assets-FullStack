import { Card, Table } from 'react-bootstrap';

function PagosList({ pagos, clientes, gestores }) {
  const getClienteName = (id) => {
    const cliente = clientes.find(c => c.id === id);
    return cliente ? cliente.nombre : 'Desconocido';
  };

  const getGestorName = (id) => {
    const gestor = gestores.find(g => g.id === id);
    return gestor ? gestor.nombre : 'Desconocido';
  };

  return (
    <Card>
      <Card.Header>Pagos</Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>RUT</th>
              <th>Monto</th>
              <th>Fecha de Pago</th>
              <th>Abonos</th>
              <th>Cliente</th>
              <th>Gestor</th>
            </tr>
          </thead>
          <tbody>
            {pagos.map(pago => (
              <tr key={pago.id}>
                <td>{pago.rut}</td>
                <td>${pago.monto}</td>
                <td>{pago.f_pago}</td>
                <td>${pago.abonos}</td>
                <td>{getClienteName(pago.cliente)}</td>
                <td>{getGestorName(pago.gestor)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default PagosList;