// SuccessPage.js
import React from 'react';
import { Container, Alert } from 'react-bootstrap';

const Success = () => {
  return (
    <Container className="mt-5">
      <Alert variant="success">
        <Alert.Heading>Payment Successful!</Alert.Heading>
        <p>
          Thank you for your payment. Your transaction was successful.
        </p>
      </Alert>
    </Container>
  );
}

export default Success;
