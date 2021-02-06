import React from 'react';
import { Container } from 'react-bootstrap';
import Signup from './Signup.js';

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center"
    style={{minHeight: "100vh"}}
    >
      <dvi className="w-100" style={{ maxWidth: "400px" }}>
        <Signup />
      </dvi>
    </Container>
  
  )
}

export default App;
