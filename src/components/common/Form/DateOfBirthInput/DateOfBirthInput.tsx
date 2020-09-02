import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { BasicInputProps } from '../../../../types';

const DateOfBirthInput = ({ value, setValue }: BasicInputProps): JSX.Element => (
  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text id="dob-text">Date of Birth</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Date of Birth"
      aria-label="Date of Birth"
      aria-describedby="dob-text"
      type="date"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </InputGroup>
);

export default DateOfBirthInput;
