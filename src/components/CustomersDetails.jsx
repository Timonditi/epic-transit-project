
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CustomerDetails() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [idPassport, setIdPassport] = useState('');

  const navigate = useNavigate();

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

  const handleCreateCustomer = async (customer) => {
    try {
      const response = await fetch('http://localhost:9292/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customer),
      });

      if (response.ok) {
        const createdCustomer = await response.json();
        console.log( createdCustomer);
        // Perform any necessary actions with the created customer
      } else {
        console.error(response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fetch the existing data from the backend
    try {
      const response = await fetch('http://localhost:9292/customers');
      if (response.ok) {
        const customerData = await response.json();
        console.log(customerData);
        // Perform any necessary actions with the fetched data

        // Create the customer object
        const customer = {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          idPassport: idPassport,
        };

        // Call the POST request handler
        await handleCreateCustomer(customer);

        // Navigate to a new route and pass customer details as URL parameters
        navigate(
          `/payment-confirmation?firstName=${firstName}&lastName=${lastName}&phoneNumber=${phoneNumber}&idPassport=${idPassport}`
        );
      } else {
        console.error(response.status);
      }
    } catch (error) {
      console.error(error);
    }
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
        <button type="submit">Confirm Payment</button>
      </form>
    </div>
  );
}

export default CustomerDetails;
