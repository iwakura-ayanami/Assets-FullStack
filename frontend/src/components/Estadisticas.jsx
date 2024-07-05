import { Card, ListGroup } from 'react-bootstrap';

function Estadisticas({ pagos, gestores }) {
  const totalPagos = pagos.length;
  const totalMonto = pagos.reduce((sum, pago) => sum + parseFloat(pago.monto), 0);
  const totalAbonos = pagos.reduce((sum, pago) => sum + pago.abonos, 0);

  const gestionesPorGestor = gestores.map(gestor => {
    const gestionesGestor = pagos.filter(pago => pago.gestor === gestor.id);
    return {
      nombre: gestor.nombre,
      totalGestiones: gestionesGestor.length,
      montoTotal: gestionesGestor.reduce((sum, pago) => sum + parseFloat(pago.monto), 0)
    };
  });

  return (
    <Card>
      <Card.Header>Estadísticas Generales</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Total de Pagos: {totalPagos}</ListGroup.Item>
        <ListGroup.Item>Monto Total: ${totalMonto.toFixed(2)}</ListGroup.Item>
        <ListGroup.Item>Total de Abonos: ${totalAbonos.toFixed(2)}</ListGroup.Item>
      </ListGroup>
      <Card.Header>Gestiones por Gestor</Card.Header>
      <ListGroup variant="flush">
        {gestionesPorGestor.map((gestor, index) => (
          <ListGroup.Item key={index}>
            {gestor.nombre}: {gestor.totalGestiones} gestiones (${gestor.montoTotal.toFixed(2)})
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

export default Estadisticas;