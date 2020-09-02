import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useAppContext } from '../../../../../context/AppContext';
import { HasHistoryProps } from '../../../../../types';

const LoggedInMenu = ({ history }: HasHistoryProps): JSX.Element => {
  const {
    userData: {
      currentUser: { email },
      resetCurrentUserData,
    },
  } = useAppContext();

  const logout = () => {
    resetCurrentUserData();
    history.push('/signout');
  };

  return (
    <>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      </Nav>
      <Navbar.Text>Signed in as: {email}</Navbar.Text>
      <Button onClick={logout}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-logout"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
          <path d="M7 12h14l-3 -3m0 6l3 -3" />
        </svg>{' '}
        Sign Out
      </Button>
    </>
  );
};

export default LoggedInMenu;
