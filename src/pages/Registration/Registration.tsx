import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import EmailInput from '../../components/common/Form/EmailInput';
import { isValidRegistration, isValidPassword, isValidEmail } from '../../utils/AuthUtils.gen';
import { isEmptyString, doStringsMatch } from '../../utils/FormatUtils.gen';
import { registerUser } from '../../api/Authentication.gen';
import { RegistrationApiResponse } from '../../types';
import ErrorAlert from '../../components/common/ErrorAlert';
import PasswordInput from '../../components/common/Form/PasswordInput';

const Registration = (): JSX.Element => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [registrationErrorMessage, setRegistrationErrorMessage] = useState<string>('');

  const onRegistrationSubmit = async () => {
    setRegistrationErrorMessage('');
    const result: RegistrationApiResponse = await registerUser({ email, password });
    if (result?.error) {
      return setRegistrationErrorMessage(result.error.message);
    }
    history.push('/signup-success');
  };

  return (
    <Container>
      <h2>Sign up Today!</h2>
      <Form>
        <ErrorAlert errorMessage={registrationErrorMessage} />
        <Col md="8">
          <EmailInput
            value={email}
            isInvalid={!isValidEmail(email) && !isEmptyString(email)}
            setValue={setEmail}
          />
          <PasswordInput
            value={password}
            isInvalid={!isValidPassword(password) && !isEmptyString(password)}
            setValue={setPassword}
          />
          <PasswordInput
            value={confirmPassword}
            isInvalid={
              !doStringsMatch(password, confirmPassword) && !isEmptyString(confirmPassword)
            }
            setValue={setConfirmPassword}
            passwordType="confirmation"
          />
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
