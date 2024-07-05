import { Card, ListGroup } from 'react-bootstrap';

function GestoresList({ gestores }) {
  return (
    <Card>
      <Card.Header>Gestores</Card.Header>
      <ListGroup variant="flush">
        {gestores.map(gestor => (
          <ListGroup.Item key={gestor.id}>{gestor.nombre}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

export default GestoresList;
