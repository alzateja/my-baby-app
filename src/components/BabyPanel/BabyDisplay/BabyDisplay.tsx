import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BabyProfile from '../BabyProfile';
import { Baby, BabiesApiResponse } from '../../../types';
import { useAppContext } from '../../../context/AppContext';
import { deleteBaby, editBaby } from '../../../api/Baby.gen';
import { formatDateString } from '../../../utils/BabyUtils.gen';

interface BabyDisplayProps {
  babies: any;
}

const BabyDisplay = ({ babies }: BabyDisplayProps): JSX.Element => {
  const {
    userData: { token },
    setBabyData,
    setErrorMessage,
  } = useAppContext();

  const deleteBabyRecord = (babyId: string) => async () => {
    const result: BabiesApiResponse = await deleteBaby(token, babyId);
    if (result?.error) {
      return setErrorMessage(result.error.message);
    }
    setBabyData(result);
  };

  const editBabyRecord = (babyId: string) => async (babyInput: Baby) => {
    const result: BabiesApiResponse = await editBaby(token, babyId, babyInput);
    if (result?.error) {
      return setErrorMessage(result.error.message);
    }
    setBabyData(result);
  };

  if (!babies.length) {
    return (
      <Row className="panel-border text-center">
        <h4>No kids found!</h4>
        <p>Add some to get started</p>
      </Row>
    );
  }

  return (
    <Row className="justify-content-center">
      {babies.map((baby: Baby) => (
        <BabyProfile
          key={baby.babyId}
          babyId={baby.babyId}
          name={baby.name}
          dob={formatDateString(baby.dob)}
          deleteRecord={deleteBabyRecord(baby.babyId)}
          editRecord={editBabyRecord(baby.babyId)}
        />
      ))}
    </Row>
  );
};
export default BabyDisplay;
