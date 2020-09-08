import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/esm/Container';
import AddEventForm from '../AddEventForm';
import { createDiapersEvent } from '../../../api/Diapers.gen';
import { createFeedingsEvent } from '../../../api/Feedings.gen';
import { diaperOptions, feedingOptions } from '../../../constants/InputConstants.gen';
import { EventApiResponse } from '../../../types';
import { useAppContext } from '../../../context/AppContext';
import './styles.css';

interface AddBabyWidgetProps {
  setOpenStatus: any;
  setErrorMessage: any;
}
const AddEventWidget = ({ setOpenStatus, setErrorMessage }: AddBabyWidgetProps): JSX.Element => {
  const {
    userData: {
      currentUser: { token },
    },
    displayData: { selectedBabyId },
    babyData: { setSelectedBabyDetails, selectedBabyDetails },
  } = useAppContext();

  const createDiaperEvent = async (type: string, date: string) => {
    const newDate = new Date(date);
    const newEvent = { babyId: selectedBabyId, type, date: newDate.toISOString() };
    const result: EventApiResponse = await createDiapersEvent(token, newEvent);
    if (result?.error) {
      return setErrorMessage(result.error.message);
    }

    setSelectedBabyDetails({ ...selectedBabyDetails, diapers: result });
  };

  const createFeedingEvent = async (type: string, date: string) => {
    const newDate = new Date(date);
    const newEvent = { babyId: selectedBabyId, type, date: newDate.toISOString() };
    const result: EventApiResponse = await createFeedingsEvent(token, newEvent);
    if (result?.error) {
      return setErrorMessage(result.error.message);
    }

    return setSelectedBabyDetails({ ...selectedBabyDetails, feedings: result });
  };

  return (
    <Container fluid className="panel-border add-child-form">
      <Tabs defaultActiveKey="diapers" id="uncontrolled-tab-example">
        <Tab eventKey="diapers" title="Diapers">
          <AddEventForm
            closeForm={() => setOpenStatus(false)}
            createEvent={createDiaperEvent}
            typeOptions={diaperOptions}
          />
        </Tab>
        <Tab eventKey="feedings" title="Feedings">
          <AddEventForm
            createEvent={createFeedingEvent}
            closeForm={() => setOpenStatus(false)}
            typeOptions={feedingOptions}
          />
        </Tab>
      </Tabs>
    </Container>
  );
};
export default AddEventWidget;
