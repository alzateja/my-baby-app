import React from 'react';
import { Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import BabyPanel from '../../components/BabyPanel';
import EventPanel from '../../components/EventPanel';
import { useAppContext } from '../../context/AppContext';

const Dashboard = (): JSX.Element => {
  const {
    displayData: { selectedBabyId },
    userData: {
      currentUser: { loggedIn },
    },
  } = useAppContext();

  if (!loggedIn) return <Redirect to="/error" />;

  return (
    <Container fluid>
      <h1 className="text-align-center">My Dashboard</h1>
      <BabyPanel />
      {selectedBabyId && <EventPanel />}
    </Container>
  );
};

export default Dashboard;
