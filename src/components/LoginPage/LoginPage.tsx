import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { isValidSignIn } from '../../utils/AuthUtils.gen';
import { loginUser } from '../../api/Authentication.gen';

const LoginPage = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitError, setSubmitError] = useState(false);

  const loginSubmit = () => {
    const isValidSubmit = isValidSignIn(email, password);

    if (isValidSubmit) {
      setSubmitError(false);
      return loginUser({ email, password });
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
      <Button variant="primary" type="button" onClick={loginSubmit}>
        Sign In
      </Button>
    </Form>
  );
};

export default LoginPage;
