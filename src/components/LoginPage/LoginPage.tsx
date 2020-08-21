import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useAppContext } from '../../context/AppContext';
import { isValidSignIn } from '../../utils/AuthUtils.gen';
import { loginUser } from '../../api/Authentication.gen';

export interface apiResultError {
  statusCode: number;
  name: string;
  message: string;
}
export interface apiResult {
  error?: apiResultError;
  id?: string;
  token?: string;
}
const LoginPage = (): JSX.Element => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitError, setSubmitError] = useState('');
  const { setUserData } = useAppContext();

  const loginSubmit = async () => {
    setSubmitError('');
    const result: apiResult = await loginUser({ email, password });
    if (result?.error) {
      return setSubmitError(result.error.message);
    }
    setUserData({ ...result, loggedIn: true });
    history.push('/dashboard');
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
      <Button
        variant="primary"
        type="button"
        onClick={loginSubmit}
        disabled={!isValidSignIn(email, password)}
      >
        Sign In
      </Button>
    </Form>
  );
};

export default LoginPage;
