import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { BasicInputProps } from '../../../../types';

const EventTypeInput = ({ value, setValue }: BasicInputProps): JSX.Element => {
  const eventOptions = ['mixed', 'wet', 'dirty'];

  return (
    <DropdownButton id="dropdown-basic-button" title={value || 'Dropdown button'}>
      {eventOptions.map((option: string) => (
        <Dropdown.Item key={option} eventKey={option} onSelect={(e) => setValue(e)}>
          {option}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};
export default EventTypeInput;
