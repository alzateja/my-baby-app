import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { isEmpty } from 'lodash';
import { isEmptyString, doStringsMatch } from '../../../utils/FormatUtils.gen';
import DateTimeInput from '../../common/Form/DateTimeInput';
import EventTypeInput from '../../common/Form/EventTypeInput';

export interface EventRowProps {
  id: string;
  date: string;
  type: string;
  deleteEvent: any;
  editEvent: any;
  typeOptions: any;
}

// const getLocalOffset = (date: string) => {
//   const dateObject = new Date(date);
//   return dateObject.toLocaleString();
// };

const EventRow = ({
  id,
  date,
  type,
  deleteEvent,
  editEvent,
  typeOptions,
}: EventRowProps): JSX.Element => {
  const [inEditState, setEditState] = useState(false);
  const [updatedType, setUpdatedType] = useState(type);
  const [updatedDate, setUpdatedDate] = useState(date.toString());
  const [updatedRecord, setUpdatedRecord] = useState({});

  useEffect(() => {
    const hasUpdatedType = !isEmptyString(updatedType) && !doStringsMatch(type, updatedType);
    const hasUpdatedDate = !isEmptyString(updatedDate) && !doStringsMatch(date, updatedDate);

    const formattedDate = new Date(updatedDate);

    const updatedEvent = {
      ...(hasUpdatedType && { type: updatedType }),
      ...(hasUpdatedDate && { date: formattedDate.toISOString() }),
    };

    return setUpdatedRecord(updatedEvent);
  }, [type, updatedType, date, updatedDate]);

  const updateCurrentRecord = () => {
    editEvent(updatedRecord);
    return setEditState(false);
  };

  const cancelEditState = () => {
    setUpdatedType(type);
    setUpdatedDate(date);
    setEditState(false);
  };

  return (
    <tr>
      <td>{id}</td>

      {inEditState ? (
        <>
          <td>
            {' '}
            <DateTimeInput value={updatedDate} setValue={setUpdatedDate} />
          </td>
          <td>
            {' '}
            <EventTypeInput
              value={updatedType}
              setValue={setUpdatedType}
              typeOptions={typeOptions}
            />
          </td>
          <td>
            <Button onClick={updateCurrentRecord} disabled={isEmpty(updatedRecord)}>
              Save Edit
            </Button>{' '}
            <Button variant="danger" onClick={cancelEditState}>
              Cancel Edit
            </Button>{' '}
          </td>
        </>
      ) : (
        <>
          <td>{date}</td>
          <td>{type}</td>
          <td>
            <Button onClick={() => setEditState(true)}>Edit Event</Button>{' '}
            <Button variant="danger" onClick={deleteEvent}>
              Delete Event
            </Button>{' '}
          </td>
        </>
      )}
    </tr>
  );
};

export default EventRow;
