import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import BabyPanel from '../../components/BabyPanel';
import EventPanel from '../../components/EventPanel';
import { getBabies } from '../../api/Baby.gen';
import { useAppContext } from '../../context/AppContext';
import { BabiesApiResponse } from '../../types';

const Dashboard = (): JSX.Element => {
  const [isBabyPanelLoading, setBabiesLoading] = useState(true);
  const {
    babyData: { babies, setBabiesList },
    displayData: { selectedBabyId, setBabyPanelLoading },
    userData: {
      currentUser: { loggedIn, id, token },
    },
  } = useAppContext();

  useEffect(() => {
    const fetchBabyData = async () => {
      if (id && token) {
        setBabyPanelLoading(true);
        const result: BabiesApiResponse = await getBabies(token, id);
        if (result?.error) {
          // return setErrorMessage(result.error.message);
        }

        setBabiesList(result);
        setBabyPanelLoading(false);
      }
    };

    fetchBabyData();
  }, [id, token, setBabiesList]);

  if (!loggedIn) return <Redirect to="/error" />;

  return (
    <Container fluid>
      {/* {errorMessage && (
        <Alert variant="danger">
          {`This was an issue submitting your request. ${errorMessage}`}
        </Alert>
      )} */}
      <h1 className="text-align-center">My Dashboard</h1>
      <BabyPanel babies={babies} isBabyPanelLoading={isBabyPanelLoading} />
      {selectedBabyId && <EventPanel />}
    </Container>
  );
};

export default Dashboard;
