import React from 'react';
import { useLocation } from 'react-router-dom';

function PaymentConfirmation() {
  const location = useLocation();
  const customer = location.state?.customer;

  if (!customer) {
    return <div>Error: Customer details not found.</div>;
  }

  return (
    <div>
      <h2>Payment Confirmation</h2>
      <p>First Name: {customer.firstName}</p>
      <p>Last Name: {customer.lastName}</p>
      <p>Phone Number: {customer.phoneNumber}</p>
      <p>ID/Passport: {customer.idPassport}</p>
    </div>
  );
}

export default PaymentConfirmation;
