import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { EventTypeInputProps } from '../../../../types';

const EventTypeInput = ({ value, setValue, typeOptions }: EventTypeInputProps): JSX.Element => {
  return (
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="event-text">Event Type</InputGroup.Text>
      </InputGroup.Prepend>
      {typeOptions.map((type) => (
        <Form.Check
          inline
          label={type}
          type="radio"
          id={`inline-${type}`}
          key={type}
          checked={value === type}
          onChange={() => setValue(type)}
        />
      ))}
    </InputGroup>
  );
};
export default EventTypeInput;
