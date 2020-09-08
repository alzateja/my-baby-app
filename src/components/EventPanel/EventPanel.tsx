import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Loading from '../common/Loading';
import ErrorAlert from '../common/ErrorAlert';
import EventTableContainer from './EventTableContainer';
import AddEventWidget from './AddEventWidget';
import { useAppContext } from '../../context/AppContext';
import { getBabyWithEvents } from '../../api/Baby.gen';
import { BabyWithEventApiResponseApiResponse } from '../../types';

const EventPanel = (): JSX.Element => {
  const {
    babyData: {
      setSelectedBabyDetails,
      selectedBabyDetails: { babyId },
    },
    userData: {
      currentUser: { token },
    },
    displayData: { isEventPanelLoading, selectedBabyId, setEventsPanelLoading },
  } = useAppContext();

  const [eventPanelErrorMessage, setEventPanelErrorMessage] = useState<string>('');
  const [showAddEvent, setShowAddEvent] = useState(false);

  useEffect(() => {
    const fetchBabyDataWithEvents = async () => {
      setEventsPanelLoading(true);
      const result: BabyWithEventApiResponseApiResponse = await getBabyWithEvents(
        token,
        selectedBabyId
      );
      if (result?.error) {
        return setEventPanelErrorMessage(result.error.message);
      }

      setSelectedBabyDetails(result);
      setEventsPanelLoading(false);
    };

    if (babyId !== selectedBabyId && selectedBabyId !== '') {
      fetchBabyDataWithEvents();
    }
  }, [selectedBabyId, babyId, setEventsPanelLoading, setSelectedBabyDetails, token]);

  return (
    <>
      <Container fluid>
        <ErrorAlert errorMessage={eventPanelErrorMessage} />
        <h2>My Events Dashboard</h2>
        <Row className="panel-border"></Row>
        {isEventPanelLoading ? (
          <Loading />
        ) : (
          <>
            {!showAddEvent && (
              <Row className="justify-content-end">
                <Button type="click" size="lg" onClick={() => setShowAddEvent(true)}>
                  Add An Event
                </Button>
              </Row>
            )}{' '}
            {showAddEvent && (
              <AddEventWidget
                setOpenStatus={setShowAddEvent}
                setErrorMessage={setEventPanelErrorMessage}
              />
            )}
            <EventTableContainer />
          </>
        )}
      </Container>
    </>
  );
};

export default EventPanel;
