import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginPage = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form>
      <Form.Group controlId="signInBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          type="email"
          value={email}
        />
      </Form.Group>

      <Form.Group controlId="signInBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          value={password}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign In
      </Button>
    </Form>
  );
};

export default LoginPage;
