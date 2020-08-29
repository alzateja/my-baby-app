import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { isEmptyString } from '../../../utils/FormatUtils.gen';
import { useAppContext } from '../../../context/AppContext';
import { createBaby } from '../../../api/Baby.gen';
import { BabiesApiResponse } from '../../../types';
import Container from 'react-bootstrap/esm/Container';
import './styles.css';

interface AddBabyWidgetProps {
  setOpenStatus: any;
}
const AddBabyWidget = ({ setOpenStatus }: AddBabyWidgetProps): JSX.Element => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');

  const {
    userData: { id, token },
    setBabyData,
    setErrorMessage,
  } = useAppContext();

  const closeBabyWidget = () => {
    setName('');
    setDob('');
    setOpenStatus(false);
  };

  const submitBaby = async () => {
    const newBaby = { name, dob, userId: id };
    const result: BabiesApiResponse = await createBaby(token, newBaby);
    if (result?.error) {
      return setErrorMessage(result.error.message);
    }
    setBabyData(result);
  };

  return (
    <Container fluid className="panel-border add-child-form">
      <Form>
        <Form.Row>
          <InputGroup as={Col}>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Child's Name"
              aria-label="Child's Name"
              aria-describedby="basic-addon1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
          <InputGroup as={Col}>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Date of Birth</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Date of Birth"
              aria-label="Date of Birth"
              aria-describedby="basic-addon1"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row className="justify-content-center align-items-center">
          <ButtonGroup>
            <Button
              type="button"
              onClick={submitBaby}
              disabled={isEmptyString(name) || isEmptyString(dob)}
            >
              Submit
            </Button>{' '}
            <Button type="button" variant="secondary" onClick={closeBabyWidget}>
              Cancel
            </Button>
          </ButtonGroup>
        </Form.Row>
      </Form>
    </Container>
  );
};
export default AddBabyWidget;
