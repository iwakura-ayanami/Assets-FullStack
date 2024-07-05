import React, { useState } from 'react';
import ClientList from './components/ClientList';
import ClientDetails from './components/ClientDetails';

function App() {
  const [selectedClientId, setSelectedClientId] = useState(null);

  return (
    <div className="App">
      <h1>Gestión de Clientes</h1>
      <div style={{ display: 'flex' }}>
        <ClientList onSelectClient={setSelectedClientId} />
        {selectedClientId && <ClientDetails clientId={selectedClientId} />}
      </div>
    </div>
  );
}

export default App;