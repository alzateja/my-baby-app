import React from 'react';
import Container from 'react-bootstrap/Container';
import Navigation from '../Navigation';
import { HasChildrenAndHistoryProps } from '../../../types';

const Shell = ({ children, history }: HasChildrenAndHistoryProps): JSX.Element => {
  return (
    <Container fluid>
      <Navigation history={history} />
      {children}
    </Container>
  );
};

export default Shell;
