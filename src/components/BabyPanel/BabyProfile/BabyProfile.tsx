import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { isEmpty } from 'lodash';
import { useAppContext } from '../../../context/AppContext';
import { isEmptyString, doStringsMatch } from '../../../utils/FormatUtils.gen';

export interface BabyProfile {
  babyId: string;
  name: string;
  dob: string;
  deleteRecord: any;
  editRecord: any;
}

const BabyProfile = ({ babyId, name, dob, deleteRecord, editRecord }: BabyProfile): JSX.Element => {
  const [inEditState, setEditState] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedDob, setUpdatedDob] = useState(dob);
  const [updatedRecord, setUpdatedRecord] = useState({});

  const cancelEditState = () => {
    setUpdatedName(name);
    setUpdatedDob(dob);
    setEditState(false);
  };

  useEffect(() => {
    const hasUpdatedName = !isEmptyString(updatedName) && !doStringsMatch(name, updatedName);
    const hasUpdatedDob = !isEmptyString(updatedDob) && !doStringsMatch(dob, updatedDob);

    const updatedBaby = {
      ...(hasUpdatedName && { name: updatedName }),
      ...(hasUpdatedDob && { dob: updatedDob }),
    };

    return setUpdatedRecord(updatedBaby);
  }, [name, updatedName, dob, updatedDob]);

  const updateCurrentRecord = () => {
    editRecord(updatedRecord);
    return setEditState(false);
  };

  return (
    <Card className="text-center" id={babyId}>
      <Card.Header>
        {inEditState ? (
          <>
            <Button onClick={updateCurrentRecord} disabled={isEmpty(updatedRecord)}>
              Save Edit
            </Button>{' '}
            <Button variant="danger" onClick={cancelEditState}>
              Cancel Edit
            </Button>{' '}
          </>
        ) : (
          <>
            <Button onClick={() => setEditState(true)}>Edit Child</Button>{' '}
            <Button variant="danger" onClick={deleteRecord}>
              Delete Child
            </Button>{' '}
          </>
        )}
      </Card.Header>
      <Card.Body>
        {inEditState ? (
          <>
            <Card.Title>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Child's Name"
                  aria-label="Child's Name"
                  aria-describedby="basic-addon1"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                />
              </InputGroup>
            </Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Date of Birth</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Date of Birth"
                    aria-label="Date of Birth"
                    aria-describedby="basic-addon1"
                    type="date"
                    value={updatedDob}
                    onChange={(e) => setUpdatedDob(e.target.value)}
                  />
                </InputGroup>
              </ListGroup.Item>
            </ListGroup>
          </>
        ) : (
          <>
            <Card.Title>
              {' '}
              <strong>Name: </strong>
              {name}{' '}
            </Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <>
                  <strong>DOB: </strong>
                  {dob}
                </>
              </ListGroup.Item>
            </ListGroup>
          </>
        )}
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">View Events</Button>
      </Card.Footer>
    </Card>
  );
};

export default BabyProfile;
