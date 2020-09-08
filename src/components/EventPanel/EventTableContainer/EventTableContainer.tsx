import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import EventTable from '../EventTable';
import ErrorAlert from '../../common/ErrorAlert';
import { deleteDiapers, editDiapers } from '../../../api/Diapers.gen';
import { deleteFeedings, editFeedings } from '../../../api/Feedings.gen';
import { useAppContext } from '../../../context/AppContext';
import { formatDateString } from '../../../utils/BabyUtils.gen';
import { Diapers, EventApiResponse, Feedings } from '../../../types';
import { diaperOptions, feedingOptions } from '../../../constants/InputConstants.gen';

const EventTableContainer = (): JSX.Element => {
  const [eventTableErrorMessage, setEventTableErrorMessage] = useState<string>('');
  const {
    userData: {
      currentUser: { token },
    },
    babyData: { selectedBabyDetails, setSelectedBabyDetails },
    displayData: { setDisplayedEventType },
  } = useAppContext();

  const { name, dob, diapers, feedings } = selectedBabyDetails;

  const deleteDiaperEvent = (eventId: string) => async () => {
    const result: EventApiResponse = await deleteDiapers(token, eventId);
    if (result?.error) {
      return setEventTableErrorMessage(result.error.message);
    }
    setSelectedBabyDetails({ ...selectedBabyDetails, diapers: result });
  };

  const deleteFeedingEvent = (eventId: string) => async () => {
    const result: EventApiResponse = await deleteFeedings(token, eventId);
    if (result?.error) {
      return setEventTableErrorMessage(result.error.message);
    }

    setSelectedBabyDetails({ ...selectedBabyDetails, feedings: result });
  };

  const editDiaperEvent = (eventId: string) => async (eventInput: Diapers) => {
    const result: EventApiResponse = await editDiapers(token, eventId, eventInput);
    if (result?.error) {
      return setEventTableErrorMessage(result.error.message);
    }
    setSelectedBabyDetails({ ...selectedBabyDetails, diapers: result });
  };

  const editFeedingEvent = (eventId: string) => async (eventInput: Feedings) => {
    const result: EventApiResponse = await editFeedings(token, eventId, eventInput);
    if (result?.error) {
      return setEventTableErrorMessage(result.error.message);
    }
    setSelectedBabyDetails({ ...selectedBabyDetails, feedings: result });
  };

  return (
    <>
      <Container fluid className="panel-border">
        <h2>
          Current Baby - {name}
          {dob && `- ${formatDateString(dob)}`}
        </h2>
        <ErrorAlert errorMessage={eventTableErrorMessage} />
        <Row className="panel-border"></Row>
        <h3>View Events</h3>
        <Tabs id="uncontrolled-tab-example" onSelect={(e) => setDisplayedEventType(e)}>
          <Tab eventKey="diapers" title="Diapers">
            <Container fluid className="panel-border">
              <EventTable
                events={diapers}
                deleteMethod={deleteDiaperEvent}
                editMethod={editDiaperEvent}
                typeOptions={diaperOptions}
              />
            </Container>
          </Tab>
          <Tab eventKey="feedings" title="Feedings">
            <Container fluid className="panel-border">
              <EventTable
                events={feedings}
                deleteMethod={deleteFeedingEvent}
                editMethod={editFeedingEvent}
                typeOptions={feedingOptions}
              />
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default EventTableContainer;
