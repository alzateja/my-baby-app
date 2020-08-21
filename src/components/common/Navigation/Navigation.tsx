import React from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useAppContext } from '../../../context/AppContext';

const Navigation = (): JSX.Element => {
  const history = useHistory();
  const {
    user: { email, loggedIn },
    resetUserData,
  } = useAppContext();

  const logout = () => {
    resetUserData();
    history.push('/signout');
  };
  return (
    <Navbar bg="dark" expand>
      <Navbar.Brand href="/">My Baby App</Navbar.Brand>
      {true ? (
        <>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          </Nav>
          <Navbar.Text>Signed in as: {email}</Navbar.Text>
          <Button href="register" variant="link" onClick={logout}>
            Sign Out
          </Button>
        </>
      ) : (
        <>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Button href="register" variant="link">
            Sign Up
          </Button>
          <Button href="login" variant="link">
            Sign In
          </Button>
        </>
      )}
    </Navbar>
  );
};

export default Navigation;
