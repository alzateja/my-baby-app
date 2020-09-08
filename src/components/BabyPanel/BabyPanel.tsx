import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddBabyWidget from './AddBabyWidget';
import BabyDisplay from './BabyDisplay';
import Loading from '../common/Loading';
import { hasReachedChildLimit } from '../../utils/BabyUtils.gen';
import ErrorAlert from '../common/ErrorAlert';
import { getBabies } from '../../api/Baby.gen';
import { BabiesApiResponse } from '../../types';
import { useAppContext } from '../../context/AppContext';

const BabyPanel = (): JSX.Element => {
  const {
    babyData: { babies, setBabiesList },
    displayData: { setBabyPanelLoading, isBabyPanelLoading },
    userData: {
      currentUser: { id, token },
    },
  } = useAppContext();

  const [babyPanelErrorMessage, setBabyPanelErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchBabyData = async () => {
      if (id && token) {
        setBabyPanelLoading(true);
        const result: BabiesApiResponse = await getBabies(token, id);
        if (result?.error) {
          return setBabyPanelErrorMessage(result.error.message);
        }

        setBabiesList(result);
        setBabyPanelLoading(false);
      }
    };

    fetchBabyData();
  }, [id, token, setBabiesList, setBabyPanelLoading]);

  const [showAddBaby, setShowAddBaby] = useState<boolean>(false);

  const openAddBabyWidget = () => setShowAddBaby(true);

  if (isBabyPanelLoading)
    return (
      <Container fluid className="panel-border">
        <Loading />
      </Container>
    );

  return (
    <>
      <Container fluid className="panel-border">
        <ErrorAlert errorMessage={babyPanelErrorMessage} />
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
            <AddBabyWidget
              setOpenStatus={setShowAddBaby}
              setErrorMessage={setBabyPanelErrorMessage}
            />
          </Row>
        )}
        <BabyDisplay babies={babies} setErrorMessage={setBabyPanelErrorMessage} />
      </Container>
    </>
  );
};

export default BabyPanel;
