import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddBabyWidget from './AddBabyWidget';
import BabyDisplay from './BabyDisplay';
import Loading from '../Loading';
import { hasReachedChildLimit } from '../../utils/BabyUtils.gen';

interface BabyPanelProps {
  babies: any;
  babiesLoading: boolean;
}

const BabyPanel = ({ babies, babiesLoading }: BabyPanelProps): JSX.Element => {
  const [showAddBaby, setShowAddBaby] = useState(false);

  const openAddBabyWidget = () => setShowAddBaby(true);

  if (babiesLoading) return <Loading />;

  return (
    <>
      <Container fluid className="panel-border">
        <Row>
          <Col>
            <h3 className="text-center">Your Children</h3>
          </Col>
          {!showAddBaby && !hasReachedChildLimit(babies) && (
            <Col className="justify-content-end">
              <Button type="click" size="lg" onClick={openAddBabyWidget}>
                Add A Baby
              </Button>
            </Col>
          )}{' '}
        </Row>
        {showAddBaby && (
          <Row>
            <AddBabyWidget setOpenStatus={setShowAddBaby} />
          </Row>
        )}
        <BabyDisplay babies={babies} />
      </Container>
    </>
  );
};

export default BabyPanel;
