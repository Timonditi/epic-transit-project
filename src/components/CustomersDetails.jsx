import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import BusCard from './BusCard';

function CustomerDetails({busData,trainData,onAddCustomer}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [idPassport, setIdPassport] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.search.split('').slice(4).join('')
  // handle digit comparison logic
   const numString = String(id);
   const hasTwoDigits = /^0*[0-9]{2}$/.test(numString);
   const hasThreeDigits = /^0*[0-9]{3}$/.test(numString);
  const filteredResult = hasTwoDigits || hasThreeDigits ? busData.find(bus => {
    return parseInt(bus.bus_number) === parseInt(id);
  }) : null;
  console.log(id)
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
    fetch("http://localhost:9292/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       first_name: firstName,
      last_name: lastName,
      passport: idPassport,
      phone_number:phoneNumber,
      mode_of_payment:'',
      departure_info:id
      }),
    })
      .then((r) => r.json())
      .then((newCustomer) => onAddCustomer(newCustomer))
      .catch(error => console.log(error,error))
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
      <p>{filteredResult && <BusCard bus={filteredResult} />}</p>
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
