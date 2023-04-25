import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';



//React hooks to manage state.
function Teacher(props) {
  const [donationAmount, setDonationAmount] = useState(0);


// HandleDonationChange function updates the donationAmount state when the user enters a donation amount
  const handleDonationChange = (event) => {
    setDonationAmount(event.target.value);
  }

  // HandleDonationSubmit function is called When the user submits the form
  const handleDonationSubmit = (event) => {
    event.preventDefault();
    // Replace this with your actual donation logic
    alert(`Thank you for donating $${donationAmount} to ${props.name}!`);
  }

  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <form onSubmit={handleDonationSubmit}>
        <label>
          Donation amount:
          <input type="number" value={donationAmount} onChange={handleDonationChange} />
        </label>
        <button type="submit">Donate</button>
      </form>
    </div>
  );
}

export default Teacher;
