import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function CustomerDetails() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [idPassport, setIdPassport] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname); // Retrieves the current path
  console.log(location.search.split('').slice(4).join('')); // Retrieves the query string
 const id = location.search.split('').slice(4).join('')

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleIdPassportChange = (e) => {
    setIdPassport(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const customer = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      idPassport: idPassport,
    };

    navigate('/payment-confirmation', { state: { customer: customer } });
  };

  return (
    <div>
      <h2>Customer Details</h2>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <div>
          <label htmlFor="idPassport">ID/Passport:</label>
          <input type="text" id="idPassport" value={idPassport} onChange={handleIdPassportChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CustomerDetails;
