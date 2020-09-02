import React from 'react';
import Alert from 'react-bootstrap/Alert';

export interface ErrorAlertProps {
  errorMessage: string;
}

const ErrorAlert = ({ errorMessage }: ErrorAlertProps): JSX.Element => {
  if (errorMessage)
    return (
      <Alert variant="danger">{`This was an issue submitting your request. ${errorMessage}`}</Alert>
    );

  return <></>;
};

export default ErrorAlert;
