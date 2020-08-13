import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Registration = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          type="email"
          value={email}
        />
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          value={password}
        />
      </Form.Group>

      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Registration;
