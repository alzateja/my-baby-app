import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { isValidRegistration } from '../../utils/AuthUtils.gen';
import { registerUser } from '../../api/Authentication.gen';

export interface apiResultError {
  statusCode: number;
  name: string;
  message: string;
}
export interface apiResult {
  error?: apiResultError;
  id?: string;
  email?: string;
}

const Registration = (): JSX.Element => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitError, setSubmitError] = useState('');

  const onRegistrationSubmit = async () => {
    setSubmitError('');
    const result: apiResult = await registerUser({ email, password });
    if (result?.error) {
      console.log(result?.error);
      return setSubmitError(result.error.message);
    }

    history.push('/signup-success');
  };

  return (
    <Form>
      {submitError && (
        <Alert variant="danger">
          {`This was an issue submitting your request. ${
            submitError ? submitError : 'Please check your inputs'
          }.`}
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

      <Button
        type="button"
        variant="primary"
        onClick={onRegistrationSubmit}
        disabled={!isValidRegistration(email, password, confirmPassword)}
      >
        Register
      </Button>
    </Form>
  );
};

export default Registration;
