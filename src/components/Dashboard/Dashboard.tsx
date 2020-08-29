import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import BabyPanel from '../BabyPanel';
import EventPanel from '../EventPanel';
import { getBabies } from '../../api/Baby.gen';
import { useAppContext } from '../../context/AppContext';
import { BabiesApiResponse } from '../../types';

const Dashboard = (): JSX.Element => {
  const [babiesLoading, setBabiesLoading] = useState(true);
  const {
    babyData: { babies },
    setBabyData,
    errorMessage,
    setErrorMessage,
    userData: { loggedIn, id, token },
  } = useAppContext();

  useEffect(() => {
    const fetchBabyData = async () => {
      if (id && token) {
        setBabiesLoading(true);
        const result: BabiesApiResponse = await getBabies(token, id);
        if (result?.error) {
          return setErrorMessage(result.error.message);
        }

        setBabyData(result);
        setBabiesLoading(false);
      }
    };

    fetchBabyData();
  }, [id, token, setBabyData, setErrorMessage]);

  if (!loggedIn) return <Redirect to="/error" />;

  return (
    <Container fluid>
      {errorMessage && (
        <Alert variant="danger">
          {`This was an issue submitting your request. ${errorMessage}`}
        </Alert>
      )}
      <h1 className="text-align-center">My Dashboard</h1>
      <BabyPanel babies={babies} babiesLoading={babiesLoading} />
      <EventPanel />
    </Container>
  );
};

export default Dashboard;
