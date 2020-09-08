import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { isEmptyString } from '../../../utils/FormatUtils.gen';
import { useAppContext } from '../../../context/AppContext';
import { createBaby } from '../../../api/Baby.gen';
import { BabiesApiResponse } from '../../../types';
import Container from 'react-bootstrap/esm/Container';
import './styles.css';
import DateOfBirthInput from '../../common/Form/DateOfBirthInput';
import BabyNameInput from '../../common/Form/BabyNameInput';

interface AddBabyWidgetProps {
  setOpenStatus: any;
  setErrorMessage: any;
}
const AddBabyWidget = ({ setOpenStatus, setErrorMessage }: AddBabyWidgetProps): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [dob, setDob] = useState<string>('');

  const {
    userData: {
      currentUser: { id, token },
    },
    babyData: { setBabiesList },
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
    setBabiesList(result);
  };

  return (
    <Container fluid className="panel-border add-child-form">
      <Form>
        <Form.Row>
          <BabyNameInput value={name} setValue={setName} />
          <DateOfBirthInput value={dob} setValue={setDob} />
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
