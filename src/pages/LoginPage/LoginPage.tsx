import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import EmailInput from '../../components/common/Form/EmailInput';
import { useAppContext } from '../../context/AppContext';
import { isValidSignIn, isValidPassword, isValidEmail } from '../../utils/AuthUtils.gen';
import { isEmptyString } from '../../utils/FormatUtils.gen';
import { loginUser } from '../../api/Authentication.gen';
import { ApiResultError, LoginApiResponse } from '../../types';
import ErrorAlert from '../../components/common/ErrorAlert';
import PasswordInput from '../../components/common/Form/PasswordInput';

const LoginPage = (): JSX.Element => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginErrorMessage, setLoginErrorMessage] = useState<string>('');
  const {
    userData: { setCurrentUserData },
  } = useAppContext();

  const loginSubmit = async () => {
    setLoginErrorMessage('');
    const result: LoginApiResponse = await loginUser({
      email,
      password,
    });
    if (result?.error) {
      return setLoginErrorMessage(result.error.message);
    }
    setCurrentUserData({ ...result, loggedIn: true });
    history.push('/dashboard');
  };

  return (
    <Container>
      <h2>Login in to start tracking today!</h2>
      <Form>
        <ErrorAlert errorMessage={loginErrorMessage} />
        <Col md="5">
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
