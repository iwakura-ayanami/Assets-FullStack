import { Card, ListGroup } from 'react-bootstrap';

function ClientesList({ clientes }) {
  return (
    <Card>
      <Card.Header>Clientes</Card.Header>
      <ListGroup variant="flush">
        {clientes.map(cliente => (
          <ListGroup.Item key={cliente.id}>{cliente.nombre}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

export default ClientesList;