import React from 'react';
import Form from 'react-bootstrap/Form';
import { InputPropsWithInvalidCheck } from '../../../../types';

const EmailInput = ({ value, setValue, isInvalid }: InputPropsWithInvalidCheck): JSX.Element => (
  <Form.Group controlId="emailInput">
    <Form.Label>Email Address</Form.Label>
    <Form.Control
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter email"
      type="email"
      value={value}
      isInvalid={isInvalid}
    />
    <Form.Control.Feedback type="invalid">
      Please make sure you enter a proper email.
    </Form.Control.Feedback>
  </Form.Group>
);

export default EmailInput;
