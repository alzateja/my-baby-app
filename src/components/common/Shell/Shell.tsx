import React from 'react';
import Container from 'react-bootstrap/Container';
import Navigation from '../Navigation';
import { HasChildrenProps } from '../../../types';

const Shell = ({ children }: HasChildrenProps) => (
  <Container>
    <Navigation />
    {children}
  </Container>
);

export default Shell;
