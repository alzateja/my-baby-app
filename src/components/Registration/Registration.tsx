import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { isValidRegistration, isValidPassword, isValidEmail } from '../../utils/AuthUtils.gen';
import { useAppContext } from '../../context/AppContext';
import { isEmptyString, doStringsMatch } from '../../utils/FormatUtils.gen';
import { registerUser } from '../../api/Authentication.gen';
import { RegistrationApiResponse } from '../../types';

const Registration = (): JSX.Element => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { errorMessage, setErrorMessage } = useAppContext();

  const onRegistrationSubmit = async () => {
    setErrorMessage('');
    const result: RegistrationApiResponse = await registerUser({ email, password });
    if (result?.error) {
      return setErrorMessage(result.error.message);
    }
    history.push('/signup-success');
  };

  return (
    <Container>
      <h2>Sign up Today!</h2>
      <Form>
        {errorMessage && (
          <Alert variant="danger">
            {`This was an issue submitting your request. ${errorMessage}`}
          </Alert>
        )}
        <Col md="8">
          <Form.Group controlId="formRegistration">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              type="email"
              value={email}
              isInvalid={!isValidEmail(email) && !isEmptyString(email)}
            />
            <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please make sure you enter a proper email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
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
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              isInvalid={
                !doStringsMatch(password, confirmPassword) && !isEmptyString(confirmPassword)
              }
            />
            <Form.Control.Feedback type="invalid">
              Please make sure your passwords match.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Button
          type="button"
          variant="primary"
          onClick={onRegistrationSubmit}
          disabled={!isValidRegistration(email, password, confirmPassword)}
        >
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Registration;
