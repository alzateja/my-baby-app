import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import LoggedInMenu from './LoggedInMenu';
import LoggedOutMenu from './LoggedOutMenu';
import { useAppContext } from '../../../../context/AppContext';
import { HasHistoryProps } from '../../../../types/';

const Navigation = ({ history }: HasHistoryProps): JSX.Element => {
  const {
    userData: {
      currentUser: { loggedIn },
    },
  } = useAppContext();

  return (
    <Navbar bg="light" expand>
      <Navbar.Brand href="/">My Baby App</Navbar.Brand>
      {loggedIn ? <LoggedInMenu history={history} /> : <LoggedOutMenu />}
    </Navbar>
  );
};

export default Navigation;
