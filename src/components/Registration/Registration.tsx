import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { isValidRegistration } from '../../utils/AuthUtils.gen';
import { registerUser } from '../../api/Authentication.gen';

const Registration = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitError, setSubmitError] = useState(false);

  const onRegistrationSubmit = (): void => {
    const isValidSubmit = isValidRegistration(email, password, confirmPassword);
    if (isValidSubmit) {
      setSubmitError(false);
      registerUser({ email, password });
    }
    return setSubmitError(true);
  };

  return (
    <Form>
      {submitError && (
        <Alert variant="danger">
          This was an issue submitting your request. Please check your inputs
        </Alert>
      )}
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

      <Button type="button" variant="primary" onClick={onRegistrationSubmit}>
        Register
      </Button>
    </Form>
  );
};

export default Registration;
