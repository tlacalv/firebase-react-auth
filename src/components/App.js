import React from 'react';
import { Container } from 'react-bootstrap';
import Signup from './Signup.js';
import { AuthProvider } from '../contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight: "100vh"}}
      >
        <dvi className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </dvi>
      </Container>
    </AuthProvider>
  
  )
}

export default App;
