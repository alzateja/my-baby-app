import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { BasicInputProps } from '../../../../types';

const DateTimeInput = ({ value, setValue }: BasicInputProps): JSX.Element => (
  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text id="event-date-label">Event Date</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Event Date"
      aria-label="Event Date"
      aria-describedby="event-date-label"
      type="datetime-local"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </InputGroup>
);

export default DateTimeInput;
