import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"; 

function TicketConfirmation() {
    return (
      <div className="confirmation">
        <h1>
          <b>BOOKING SUCCESSFUL</b>
        </h1>
        <FontAwesomeIcon icon={faCheckCircle} size="4x" color="green" />
      </div>
    );
  }
  
  export default TicketConfirmation;