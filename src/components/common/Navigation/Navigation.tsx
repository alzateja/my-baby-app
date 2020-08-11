import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Navigation = () => (
  <Navbar bg="dark" expand="lg">
    <Navbar.Brand href="#home">My Baby App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <Button variant="outline-primary" href="register">
      Sign Up
    </Button>
    <Button variant="outline-primary" href="login">
      Sign In
    </Button>
  </Navbar>
);

export default Navigation;
