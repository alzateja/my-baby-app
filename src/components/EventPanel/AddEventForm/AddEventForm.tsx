import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { isEmptyString } from '../../../utils/FormatUtils.gen';
import Container from 'react-bootstrap/esm/Container';
import DateTimeInput from '../../common/Form/DateTimeInput';
import EventTypeInput from '../../common/Form/EventTypeInput';
import './styles.css';

interface AddEventFormProps {
  typeOptions: any[];
  closeForm: any;
  createEvent: any;
}
const AddEventForm = ({ typeOptions, closeForm, createEvent }: AddEventFormProps): JSX.Element => {
  const [type, setType] = useState('');
  const [date, setEventDate] = useState('');

  return (
    <Container fluid className="panel-border add-child-form">
      <Form>
        <Form.Row>
          <EventTypeInput value={type} setValue={setType} typeOptions={typeOptions} />
          <DateTimeInput value={date} setValue={setEventDate} />
        </Form.Row>
        <Form.Row className="justify-content-center align-items-center">
          <ButtonGroup>
            <Button
              type="button"
              onClick={() => createEvent(type, date)}
              disabled={isEmptyString(date) || isEmptyString(type)}
            >
              Submit
            </Button>{' '}
            <Button type="button" variant="secondary" onClick={closeForm}>
              Cancel
            </Button>
          </ButtonGroup>
        </Form.Row>
      </Form>
    </Container>
  );
};
export default AddEventForm;
