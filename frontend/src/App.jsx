import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation';
import ClientList from './components/ClientList';
import ClientDetails from './components/ClientDetails';

function App() {
  const [selectedClientId, setSelectedClientId] = useState(null);

  return (
    <>
      <Navigation />
      <Container>
        <Row>
          <Col md={4}>
            <ClientList onSelectClient={setSelectedClientId} />
          </Col>
          <Col md={8}>
            {selectedClientId && <ClientDetails clientId={selectedClientId} />}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;