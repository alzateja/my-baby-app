import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { BasicInputProps } from '../../../../types';

const BabyNameInput = ({ value, setValue }: BasicInputProps): JSX.Element => (
  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text id="name-label">Name</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Child's Name"
      aria-label="Child's Name"
      aria-describedby="name-label"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </InputGroup>
);

export default BabyNameInput;
