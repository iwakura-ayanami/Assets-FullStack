import { Container, Row, Col, Alert } from 'react-bootstrap';
import ClientesList from './components/ClientesList';
import GestoresList from './components/GestoresList';
import PagosList from './components/PagosList';
import Estadisticas from './components/Estadisticas';
import useApi from './hooks/useApi';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { clientes, gestores, pagos, loading, error } = useApi();

  if (loading) return <Container className="mt-5"><Alert variant="info">Cargando...</Alert></Container>;
  if (error) return <Container className="mt-5"><Alert variant="danger">Error: {error}</Alert></Container>;

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Sistema de Gestión de Pagos</h1>
      
      <Row className="mb-4">
        <Col md={6}>
          <Estadisticas pagos={pagos} gestores={gestores} />
        </Col>
        <Col md={3}>
          <ClientesList clientes={clientes} />
        </Col>
        <Col md={3}>
          <GestoresList gestores={gestores} />
        </Col>
      </Row>

      <Row>
        <Col>
          <PagosList pagos={pagos} clientes={clientes} gestores={gestores} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;