import React from 'react';
import { Container } from 'react-bootstrap';
import Signup from './Signup.js';
import Dashboard from "./Dashboard";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Login from "./Login";
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center"
    style={{minHeight: "100vh"}}
    >
      <dvi className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </dvi>
    </Container>

  )
}

export default App;
