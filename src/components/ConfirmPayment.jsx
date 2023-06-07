import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

function PaymentConfirmation() {
  const location = useLocation();
  const customer = location.state?.customer;
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('');

  if (!customer) {
    return <div>Error: Customer details not found.</div>;
  }

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleNextPage = () => {
    navigate('/TicketConfirmation');
  };

  const handlePreviousPage = () => {
    navigate('/customer-details');
  };

  return (
    <div>
      <h2>Payment Confirmation</h2>
      <p>First Name: {customer.firstName}</p>
      <p>Last Name: {customer.lastName}</p>
      <p>Phone Number: {customer.phoneNumber}</p>
      <p>ID/Passport: {customer.idPassport}</p>

      <h3>Mode of Payment</h3>
      <div>
        <label>
          <input
            type="radio"
            value="mpesa"
            checked={paymentMethod === 'mpesa'}
            onChange={handlePaymentMethodChange}
          />
          M-Pesa
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="creditCard"
            checked={paymentMethod === 'creditCard'}
            onChange={handlePaymentMethodChange}
          />
          Credit Card
        </label>
      </div>

      <button onClick={handlePreviousPage}>
        <Link to="/customer-details">Edit</Link>
      </button>
      <button onClick={handleNextPage}>
        <Link to="/TicketConfirmation">Confirm</Link>
      </button>
    </div>
  );
}

export default PaymentConfirmation;
