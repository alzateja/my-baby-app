import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { useAppContext } from '../../context/AppContext';
import { isValidSignIn, isValidPassword, isValidEmail } from '../../utils/AuthUtils.gen';
import { isEmptyString } from '../../utils/FormatUtils.gen';
import { loginUser } from '../../api/Authentication.gen';
import { LoginApiResponse } from '../../types';

const LoginPage = (): JSX.Element => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitError, setSubmitError] = useState('');
  const { setUserData } = useAppContext();

  const loginSubmit = async () => {
    setSubmitError('');
    const result: LoginApiResponse = await loginUser({ email, password });
    if (result?.error) {
      return setSubmitError(result.error.message);
    }
    setUserData({ ...result, loggedIn: true });
    history.push('/dashboard');
  };

  return (
    <Container>
      <h2>Login in to start tracking today!</h2>
      <Form>
        {submitError && (
          <Alert variant="danger">
            {`This was an issue submitting your request. ${
              submitError ? submitError : 'Please check your inputs.'
            }`}
          </Alert>
        )}
        <Col md="5">
          <Form.Group controlId="signInBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              type="email"
              value={email}
              isInvalid={!isValidEmail(email) && !isEmptyString(email)}
            />
            <Form.Control.Feedback type="invalid">
              Please make sure you enter a proper email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="signInBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              value={password}
              isInvalid={!isValidPassword(password) && !isEmptyString(password)}
            />
            <Form.Control.Feedback type="invalid">
              Please make sure your password is longer than 8 characters.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Button
          variant="primary"
          type="button"
          onClick={loginSubmit}
          disabled={!isValidSignIn(email, password)}
        >
          Sign In
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
