import React from 'react';
import Form from 'react-bootstrap/Form';
import { PasswordInputProps } from '../../../../types';

const PasswordInput = ({
  value,
  setValue,
  isInvalid,
  passwordType = 'initial',
}: PasswordInputProps): JSX.Element => {
  const isConfirmPassword = passwordType === 'confirmation';
  const labelText = isConfirmPassword ? 'Confirm Password' : 'Password';

  return (
    <Form.Group controlId={isConfirmPassword ? 'confirmPasswordInput' : 'passwordInput'}>
      <Form.Label>{labelText}</Form.Label>
      <Form.Control
        onChange={(e) => setValue(e.target.value)}
        placeholder={labelText}
        type="password"
        value={value}
        isInvalid={isInvalid}
      />
      <Form.Control.Feedback type="invalid">
        {isConfirmPassword
          ? 'Please make sure your passwords match.'
          : 'Please make sure your password is longer than 8 characters.'}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default PasswordInput;
