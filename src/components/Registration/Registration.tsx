import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { isNotEmpty, textMatches } from '../../utils/Format.gen';

const Registration = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passWordMismatchError, setPasswordMismatchError] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);

  useEffect(() => {
    if (isNotEmpty(password) && isNotEmpty(confirmPassword)) {
      setPasswordMismatchError(textMatches(password, confirmPassword));
    }
  }, [confirmPassword, password, setPasswordMismatchError]);

  useEffect(() => {
    setDisableSubmit(
      passWordMismatchError ||
        !isNotEmpty(password) ||
        !isNotEmpty(confirmPassword) ||
        !isNotEmpty(email)
    );
  }, [email, confirmPassword, passWordMismatchError, password]);

  return (
    <Form>
      {passWordMismatchError && <Alert variant="danger">This is a password mismatch</Alert>}
      <Form.Group controlId="formRegistration">
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

      <Button disabled={disableSubmit} type="submit" variant="primary">
        Register
      </Button>
    </Form>
  );
};

export default Registration;
